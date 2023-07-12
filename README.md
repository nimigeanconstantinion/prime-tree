
import { ALPHANUMERIC_CHARACTERS } from '../constants/alphanumeric-characters.constants';
import { SerialNumberFormatDto } from '../models/serial-number-format.dto';
import { getCurrentCalendarWeek } from './get-current-calendar-week.function';
import { getCurrentDayOfYear } from './get-current-day-of-year.function';
import { getSiemensAlternativeMonthLetter } from './get-siemens-alternative-month-letter.function';
import { getSiemensMonthLetter } from './get-siemens-month-letter.function';
import { getSiemensYearLetter } from './get-siemens-year-letter.function';

/**
 * Method to check whether the alternative month is enabled.
 * @param {string} serialNumberFormat The serial number format to check.
 * @returns {boolean} True if enabled false if not.
 * @example
 * const isAlternateMonthEnabled: boolean = isAlternativeMonthEnabled('555-{DOY}{WW}{@@@@@@}'); // false
 * const isAlternateMonthEnabled: boolean = isAlternativeMonthEnabled('555-{SI2M}{DD}{######}'); // true
 * const isAlternateMonthEnabled: boolean = isAlternativeMonthEnabled('555-{SIMA}{DD}{######}'); // true
 */
export const isAlternativeMonthEnabled = (serialNumberFormat: string): boolean => !!serialNumberFormat.match(/(\{SI2M\}|\{SIMA\})/);

/**
 * Method to check whether the alternative month is active.
 * @param {SerialNumberFormatDto} serialNumberFormat The serial number format to check.
 * @returns {boolean} True if active false if not.
 * @example
 * const isAlternateMonthActive: boolean = isAlternativeMonthActive(serialNumberFormat);
 */
export const isAlternativeMonthActive = ({
  count, initialValue, format, maximalValue
}: SerialNumberFormatDto): boolean => (!!format.match(/\{SI2M\}/) && count + initialValue > maximalValue) || !!format.match(/\{SIMA\}/);

/**
 * Creates the Siemens date indicator for an alternative month format.
 * @returns {string} A string representing the Siemens date indicator.
 * @example
 * const siemensDateIndicator: string = createAlternativeSiemensDateIndicator();
 */
export const createAlternativeSiemensDateIndicator = (): string => {
  const today: Date = new Date(Date.now());
  return `${getSiemensYearLetter(today.getUTCFullYear())}${getSiemensAlternativeMonthLetter(today.getUTCMonth())}`;
};

/**
 * Creates the Siemens date indicator.
 * @returns {string} A string representing the Siemens date indicator.
 * @example
 * const siemensDateIndicator: string = createSiemensDateIndicator();
 */
export const createSiemensDateIndicator = (): string => {
  const today: Date = new Date(Date.now());
  return `${getSiemensYearLetter(today.getUTCFullYear())}${getSiemensMonthLetter(today.getUTCMonth())}`;
};

/**
 * Generates alphanumeric representation according to Siemens definition for a given number > 0.
 * @param {number} value The number for which the alphanumeric representation is to be generated.
 * @returns {string} The alphanumeric representation for the passed number.
 * @example
 * const actual: string = generateAlphanumericStringFromNumber(4511); // 3WP
 */
export const generateAlphanumericStringFromNumber = (value: number): string => {
  let alphanumericNumber = '';
  while (value > 0) {
    // eslint-disable-next-line max-len
    alphanumericNumber = `${ALPHANUMERIC_CHARACTERS[value - ALPHANUMERIC_CHARACTERS.length * Math.floor(value / ALPHANUMERIC_CHARACTERS.length)]}${alphanumericNumber}`;
    // eslint-disable-next-line no-param-reassign
    value = Math.floor(value / ALPHANUMERIC_CHARACTERS.length);
  }
  return alphanumericNumber;
};

/**
 * Generates serial numbers.
 * @param {SerialNumberFormatDto} serialNumberFormat The serial number format, containg the already increased count, the format and the initial value.
 * @param {number} quantity The amount of serial numbers to generate.
 * @returns {string[]} A list of serial numbers.
 * @example
 * const actual: string[] = generateSerialNumbers({ count: 16219, format: '555-{DOY}{WW}{@@@@@@}', initialValue: 1000 }, 1); // ['555-28641000EWD']
 * 
 * 
 * 
 */


const decimalToHexadecimal = (num: number): string => {
  return num.toString(16).toUpperCase();
}



export const generateSerialNumbers = (serialNumberFormat: SerialNumberFormatDto, quantity: number): string[] => {
  const {
    count, format, initialValue, maximalValue
  } = serialNumberFormat;
  const today: Date = new Date(Date.now());

  const rawSerialNumber: string = format
    .replace(/\{DD\}/, `${today.getUTCDate()}`.padStart(2, '0'))
    .replace(/\{MM\}/, `${today.getUTCMonth() + 1}`.padStart(2, '0'))
    .replace(/\{WW\}/, `${getCurrentCalendarWeek()}`.padStart(2, '0'))
    .replace(/\{YY\}/, `${today.getUTCFullYear()}`.substr(2))
    .replace(/\{YYYY\}/, `${today.getUTCFullYear()}`)
    .replace(/\{DOY\}/, `${getCurrentDayOfYear()}`);

  const requiredCharacterCount: number = ((format.match(/\{[@#\$]{1,}\}/)?.[0] ?? '').match(/[@#\$]{1,}/)?.[0] ?? '').length;
  const isAlphanumeric = !!format.match(/\{@{1,}\}/);
  const isHexadecimal = !!format.match(/\{\${1,}\}/);
  const serialNumbers: string[] = [];

  for (let quantityCount = 0; quantityCount < quantity; quantityCount += 1) {
    const calculatedCount: number = initialValue + count - quantity + quantityCount;
    const currentCount: number = calculatedCount > maximalValue && isAlternativeMonthEnabled(format) ? calculatedCount - maximalValue + initialValue - 1 : calculatedCount;
    let currentCountFormated: string;
    if (isAlphanumeric) {
      currentCountFormated = generateAlphanumericStringFromNumber(currentCount);
    } else if (isHexadecimal) {
      currentCountFormated = decimalToHexadecimal(currentCount);
    } else {
      currentCountFormated = `${currentCount}`;
    }
    const currentCountString: string = `${currentCountFormated}`.padStart(requiredCharacterCount, '0');

    const isAlternativeDate: boolean = isAlternativeMonthActive({
      count: count - quantity + quantityCount,
      format,
      initialValue,
      maximalValue
    } as SerialNumberFormatDto);

    const siemensDateIndicator: string = isAlternativeDate ? createAlternativeSiemensDateIndicator() : createSiemensDateIndicator(); // {SI} | {SI2M} | {SIMA}

    const serialNumber: string = rawSerialNumber
      .replace(/\{[@#\$]{1,}\}/, currentCountString)
      .replace(/\{SI\}/, siemensDateIndicator)
      .replace(/\{SI2M\}/, siemensDateIndicator)
      .replace(/\{SIMA\}/, siemensDateIndicator);
    serialNumbers.push(serialNumber);
  }
  return serialNumbers;
};
