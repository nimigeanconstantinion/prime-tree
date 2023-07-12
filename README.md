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
