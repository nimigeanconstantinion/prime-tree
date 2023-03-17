import {CafeneaSauLocalitate} from "./CafeneaSauLocalitate";
import {Runtime} from "inspector";


export class ListaCafenele {
    public static cafenele: CafeneaSauLocalitate[] =
        [
            {
                "id": 4334,
                "idParinte": null,
                "denumire": "Teleorman",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 5560,
                "idParinte": 4334,
                "denumire": "Bogheni",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8786,
                "idParinte": 5560,
                "denumire": "MISCAREA LINGVISTICA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 1623,
                "idParinte": 5560,
                "denumire": "FARMACIA SUEDEZA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 8725,
                "idParinte": null,
                "denumire": "Bistrița-Năsăud",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 2627,
                "idParinte": 8725,
                "denumire": "Calea Mare",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 1590,
                "idParinte": 2627,
                "denumire": "MACUL RIZAT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 9838,
                "idParinte": null,
                "denumire": "Bacău",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 2720,
                "idParinte": 9838,
                "denumire": "Cucui",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8489,
                "idParinte": 2720,
                "denumire": "RESTAURANTUL NEPOMENIT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 3709,
                "idParinte": null,
                "denumire": "Galați",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 3431,
                "idParinte": 3709,
                "denumire": "Satul Balaci",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8588,
                "idParinte": 3431,
                "denumire": "INSPECTORUL EFERVESCENT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 864,
                "idParinte": 3431,
                "denumire": "ADMINISTRATIA FECALA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 4371,
                "idParinte": 3431,
                "denumire": "SCOALA LITUANIANA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 842,
                "idParinte": null,
                "denumire": "Covasna",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 5462,
                "idParinte": 842,
                "denumire": "Valea Boului",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8732,
                "idParinte": 842,
                "denumire": "Ulma",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 1927,
                "idParinte": 8732,
                "denumire": "EXPERTUL RAPIT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 1784,
                "idParinte": 8732,
                "denumire": "COMPANIA ASIATICA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 7050,
                "idParinte": 8732,
                "denumire": "LOTERIA STRAINA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 2229,
                "idParinte": null,
                "denumire": "Cluj",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 9674,
                "idParinte": 2229,
                "denumire": "Moroșeni",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8382,
                "idParinte": 9674,
                "denumire": "MACUL SFENOIDAL SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 1527,
                "idParinte": null,
                "denumire": "Constanța",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 2530,
                "idParinte": 1527,
                "denumire": "Ineleț",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 5492,
                "idParinte": 2530,
                "denumire": "SCOALA CIUTA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 305,
                "idParinte": null,
                "denumire": "Caraș-Severin",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 6672,
                "idParinte": 305,
                "denumire": "Periș",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 807,
                "idParinte": null,
                "denumire": "Alba",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 7108,
                "idParinte": 807,
                "denumire": "Snidă",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8248,
                "idParinte": 7108,
                "denumire": "comuna Ilovăț",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 428,
                "idParinte": 8248,
                "denumire": "ASIGURAREA COLORATA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 8133,
                "idParinte": 8248,
                "denumire": "BISERICA NEPUSA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 9562,
                "idParinte": 8248,
                "denumire": "INTREPRINDEREA SUGATIVA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 6036,
                "idParinte": 8248,
                "denumire": "TRANSPORTUL PSIHROFIL SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 3828,
                "idParinte": 7108,
                "denumire": "Roșia",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 2703,
                "idParinte": 3828,
                "denumire": "Buceș",
                "fel": "L",
                "adancime": 4
            },
            {
                "id": 6312,
                "idParinte": 2703,
                "denumire": "Mărgău",
                "fel": "L",
                "adancime": 5
            },
            {
                "id": 5294,
                "idParinte": 6312,
                "denumire": "COMPANIA FASNEATA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 5703,
                "idParinte": 6312,
                "denumire": "FUNDATIA PRECISTA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 249,
                "idParinte": 6312,
                "denumire": "AGENTIA ENGLEZA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 8641,
                "idParinte": 2703,
                "denumire": "Topolea",
                "fel": "L",
                "adancime": 5
            },
            {
                "id": 7430,
                "idParinte": 8641,
                "denumire": "FABRICA CHINEZA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 8283,
                "idParinte": 8641,
                "denumire": "EXPERTUL RECHIZITORIAL SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 9771,
                "idParinte": 807,
                "denumire": "Foienfir",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8952,
                "idParinte": 9771,
                "denumire": "Colți",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 9443,
                "idParinte": null,
                "denumire": "Mureș",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 7160,
                "idParinte": 9443,
                "denumire": "Știubee",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 4918,
                "idParinte": 7160,
                "denumire": "Dubiușca",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 1870,
                "idParinte": 4918,
                "denumire": "NUFARUL PREDICABIL SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 6788,
                "idParinte": 9443,
                "denumire": "Herghelia Lucina",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 3152,
                "idParinte": 6788,
                "denumire": "Valea Fiadului",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 8064,
                "idParinte": 3152,
                "denumire": "PAROHIA LOCOMOBILA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 5101,
                "idParinte": 3152,
                "denumire": "MEDICINA NADOLEANCA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 9141,
                "idParinte": null,
                "denumire": "Vaslui",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 1814,
                "idParinte": 9141,
                "denumire": "Ic-Ponor",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 6352,
                "idParinte": 1814,
                "denumire": "Popești",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 342,
                "idParinte": 6352,
                "denumire": "Asău",
                "fel": "L",
                "adancime": 4
            },
            {
                "id": 9599,
                "idParinte": 342,
                "denumire": "CONSILIUL IMPENETRANT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 5161,
                "idParinte": 1814,
                "denumire": "Anghelești",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 8894,
                "idParinte": 5161,
                "denumire": "Pătroaia Gară",
                "fel": "L",
                "adancime": 4
            },
            {
                "id": 2324,
                "idParinte": 8894,
                "denumire": "Pălămida",
                "fel": "L",
                "adancime": 5
            },
            {
                "id": 8743,
                "idParinte": 2324,
                "denumire": "STATIA BARBOASA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 3569,
                "idParinte": 5161,
                "denumire": "Gerea",
                "fel": "L",
                "adancime": 4
            },
            {
                "id": 7088,
                "idParinte": 3569,
                "denumire": "Poiana",
                "fel": "L",
                "adancime": 5
            },
            {
                "id": 3649,
                "idParinte": 7088,
                "denumire": "Moroieni",
                "fel": "L",
                "adancime": 6
            },
            {
                "id": 8229,
                "idParinte": 3649,
                "denumire": "INVESTITIA ACEASTA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 853,
                "idParinte": 7088,
                "denumire": "Galei",
                "fel": "L",
                "adancime": 6
            },
            {
                "id": 4041,
                "idParinte": 853,
                "denumire": "CONSTRUCTIA XEROFILA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 4274,
                "idParinte": 9141,
                "denumire": "Runcu",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 4317,
                "idParinte": null,
                "denumire": "Suceava",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 5413,
                "idParinte": 4317,
                "denumire": "Dumești",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 3062,
                "idParinte": 5413,
                "denumire": "CABINETUL STRADUITOR SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 2210,
                "idParinte": null,
                "denumire": "Sălaj",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 8147,
                "idParinte": 2210,
                "denumire": "Rudicica",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 1308,
                "idParinte": 8147,
                "denumire": "AGENTIA OVINA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 4513,
                "idParinte": 8147,
                "denumire": "CABINETUL ARGESEAN SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 217,
                "idParinte": 2210,
                "denumire": "Roșiești",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 5484,
                "idParinte": 217,
                "denumire": "TRANSPORTUL HILAR SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 6643,
                "idParinte": null,
                "denumire": "Olt",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 2622,
                "idParinte": 6643,
                "denumire": "Hrobi",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 8855,
                "idParinte": 2622,
                "denumire": "Buc",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 5778,
                "idParinte": 8855,
                "denumire": "CABINETUL MARONIU SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 106,
                "idParinte": 8855,
                "denumire": "MEDICINA DIATONICA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 7080,
                "idParinte": null,
                "denumire": "Satu Mare",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 3188,
                "idParinte": 7080,
                "denumire": "Caragui",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 3072,
                "idParinte": 3188,
                "denumire": "TRANSPORTUL PRACTICIST SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 3526,
                "idParinte": 3188,
                "denumire": "PRODUCTIA ODATA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 7067,
                "idParinte": null,
                "denumire": "Bihor",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 1859,
                "idParinte": 7067,
                "denumire": "Popesti",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 5627,
                "idParinte": 1859,
                "denumire": "NUFARUL DEGENERESCENT SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 609,
                "idParinte": null,
                "denumire": "Ialomița",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 7728,
                "idParinte": 609,
                "denumire": "Herești",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 1494,
                "idParinte": 7728,
                "denumire": "Sângeorz-Băi",
                "fel": "L",
                "adancime": 3
            },
            {
                "id": 5937,
                "idParinte": null,
                "denumire": "Arad",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 5883,
                "idParinte": 5937,
                "denumire": "Dealul Domnului",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 9932,
                "idParinte": 5883,
                "denumire": "CABINETUL CORBIU SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 7516,
                "idParinte": 5883,
                "denumire": "LOTERIA GRAFITIZATA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 5118,
                "idParinte": 5937,
                "denumire": "Dâlja",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 3552,
                "idParinte": 5118,
                "denumire": "AGENTIA MASTOIDA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 2066,
                "idParinte": 5118,
                "denumire": "CONSILIUL MIEROS SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 9550,
                "idParinte": null,
                "denumire": "Timiș",
                "fel": "L",
                "adancime": null
            },
            {
                "id": 4212,
                "idParinte": 9550,
                "denumire": "Bartea",
                "fel": "L",
                "adancime": 2
            },
            {
                "id": 4382,
                "idParinte": 4212,
                "denumire": "CONSTRUCTIA ABOLITIONISTA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 269,
                "idParinte": 4212,
                "denumire": "LOTERIA SUGATIVA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 8233,
                "idParinte": 4212,
                "denumire": "FUNDATIA CRIPTOGAMA SRL",
                "fel": "C",
                "adancime": null
            },
            {
                "id": 2810,
                "idParinte": 4212,
                "denumire": "ASIGURAREA ADOGMATICA SRL",
                "fel": "C",
                "adancime": null
            }
        ];
}



export interface ProdusDisponibil {
    id: number;
    denumire: string;
    descriere: string;
    pret: number;
}



export class PseudoApiService {

    private cafele: ProdusDisponibil[] =
        [
            { id: 1, denumire: 'TANZANIA PEABERRY', descriere: 'Grown on Mt. Meru and Mt. Kilimanjaro, Tanzania Peaberry coffee beans are a bright Arabica coffee with a medium body and delightful fruit-toned acidity. The best Tanzania coffees have a taste that is deep and rich, often revealing hints of black currant which soften to chocolate and then blend into the coffee\'s lingering, sweet finish', pret: 12 },
            { id: 2, denumire: 'HAWAII KONA', descriere: 'The best Hawaiian Kona coffee beans are grown at about 2,000 feet above sea level on the fertile slopes of Mauna Loa and Hualalai Volcanoes on the Big Island of Hawaii, Kona coffee is known for its rich yet light and delicate taste with a complex aroma. Different farms will have slightly different coffees under their own brand, but shouldn\'t be a blend.', pret: 12 },
            { id: 3, denumire: 'NICARAGUAN', descriere: 'A new arrival to the list this year is Nicaragua, which has developed a number of highly rated coffees. The best coffees from this top-rated central american country typically exhibit notes of chocolate (dark, almost cacao-like) and fruits like apple and berries.', pret: 12 },
            { id: 4, denumire: 'SUMATRA MANDHELING', descriere: 'Exhibiting a full body and low acidity, Sumatra Mandheling beans are best known as a smooth drinking coffee. It is also known for its sweetness and herbacious, earthy flavor, and complex aroma. The coffee is grown in the Lintong region in north central Sumatra near Lake Toba.', pret: 12 },
            { id: 5, denumire: 'SULAWESI TORAJA', descriere: 'This multi-dimensional coffee is grown in the southeastern highlands of Sulawesi. Known best for its full body and rich, expansive flavor, Sulawesi Toraja coffee beans are very well balanced and exhibits tasting notes of dark chocolate and ripe fruit. The acidity is low-toned yet vibrant, with less body than a Sumatran coffee though slightly more acidic, and with more earthiness than a typical Java Arabica coffee.', pret: 12 },
            { id: 6, denumire: 'MOCHA JAVA', descriere: 'Perhaps the most famous blend of coffee beans, Mocha Java includes Arabian (Yemen) Mocha coffee and Indonesian Java Arabica coffee, two coffees with complementary characteristics. The best Yemen Mocha coffees exhibit a lively intensity and pleasant wildness which complements the clean and bright smoothness of the Java coffee. The traditional blend of Mocha and Java coffee beans creates a complex and yet well-balanced brewed cup.', pret: 12 },
            { id: 7, denumire: 'ETHIOPIAN HARRAR', descriere: 'Spicy, fragrant, and heavy-bodied, Ethiopian Harrar coffee is a wild and exotic coffee bean that is dry-processed (natural) Arabica coffee grown in southern Ethiopia at elevations from 4,500 and 6,300 feet above sea level. The dry-processing creates a fruity taste likened to dry, red wine, a power house coffee exhibiting a bold taste that resonates in the cup.', pret: 12 },
            { id: 8, denumire: 'ETHIOPIAN YIRGACHEFFE', descriere: 'Fragrant and spicy, the best Yirgacheffe coffee beans are known for their sweet flavor and aroma with a medium to light body. The coffee is wet processed and grown at elevations from 5,800 feet to 6,600 feet above sea level.', pret: 12 },
            { id: 9, denumire: 'GUATEMALAN ANTIGUA', descriere: 'Grown at elevations more than 4,600 feet above sea level, the grade of Guatemala Antigua coffee beans is known as Strictly Hard Bean and include the Arabica varietals Catuai (Coffea arabica var. catuai), Caturra (Coffea arabica var. caturra), and Bourbon (Coffea arabica var. bourbon).', pret: 12 },
            { id: 10, denumire: 'KENYA AA', descriere: 'Clearly one of the world\'s best premium coffee beans, this is listed last but certainly isn\'t the least of the best coffees in the world. Kenya AA coffee is grown at more than 2,000 feet above sea level on Kenya\'s high plateaus. The AA refers to the biggest screen size in the Kenya coffee grading system with specifications that the beans are just a little more than one-fourth inch in diameter.', pret: 12 },
            { id: 11, denumire: 'JAMAICAN BLUE MOUNTAIN', descriere: 'Grown in Jamaica\'s Blue Mountain District, Jamaica Blue Mountain coffee is often described as sophisticated with a smooth and silky, complex taste, outstanding full body, and very well balanced. Many reviewers have called it the quintessential cup of coffee and it clearly stands among the world\'s top gourmet coffees', pret: 12 }
        ];

    constructor() { }

    public ListaLocalitati(): Promise<CafeneaSauLocalitate[]>{
        // Returneaza o lista de cafenele dupa un scurt delay care
         return Promise.resolve(ListaCafenele.cafenele);
    }

    public getCafele():ProdusDisponibil[]{
        return this.cafele;
    }
    public ProduseDisponibile(idCafenea: number): Promise<ProdusDisponibil[]>|Error {
        switch(idCafenea)
        {
            case 8786: return Promise.resolve([this.cafele[7],this.cafele[1],this.cafele[9],this.cafele[6],this.cafele[0],this.cafele[2],this.cafele[8],this.cafele[5]]);
            case 1623: return Promise.resolve([this.cafele[9],this.cafele[7],this.cafele[6],this.cafele[0]]);
            case 1590: return Promise.resolve([this.cafele[3],this.cafele[0],this.cafele[2],this.cafele[8],this.cafele[1],this.cafele[9],this.cafele[7],this.cafele[6]]);
            case 8489: return Promise.resolve([this.cafele[4],this.cafele[3],this.cafele[5],this.cafele[0],this.cafele[6],this.cafele[2],this.cafele[1]]);
            case 8588: return Promise.resolve([this.cafele[5],this.cafele[2]]);
            case 864: return Promise.resolve([this.cafele[3],this.cafele[1],this.cafele[4],this.cafele[9],this.cafele[2],this.cafele[5],this.cafele[0]]);
            //case 4371: return timer(818).pipe(mergeMap(e => throwError('Cafeneaua cu id 4371 ridica intentionat o exceptie.')));
            case 1927: return Promise.resolve
([this.cafele[6],this.cafele[3]]);
            case 1784: return Promise.resolve
([this.cafele[3],this.cafele[6],this.cafele[9],this.cafele[5],this.cafele[1],this.cafele[4],this.cafele[2],this.cafele[7]]);
            case 7050: return Promise.resolve([this.cafele[7],this.cafele[6],this.cafele[9],this.cafele[5],this.cafele[8],this.cafele[1],this.cafele[2],this.cafele[4]]);
            case 8382: return Promise.resolve
([this.cafele[2],this.cafele[0],this.cafele[3],this.cafele[7]]);
            case 5492: return Promise.resolve
([this.cafele[8],this.cafele[3]]);
            case 428: return Promise.resolve
([this.cafele[7],this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[8],this.cafele[1],this.cafele[9],this.cafele[3]]);
            case 8133: return Promise.resolve
([this.cafele[5],this.cafele[9],this.cafele[7],this.cafele[0],this.cafele[1]]);
            case 9562: return Promise.resolve
([this.cafele[3],this.cafele[8],this.cafele[1]]);
            case 6036: return Promise.resolve
([this.cafele[6],this.cafele[8],this.cafele[9],this.cafele[3],this.cafele[2],this.cafele[7],this.cafele[4]]);
            case 5294: return Promise.resolve
([this.cafele[2],this.cafele[7],this.cafele[6]]);
            case 5703: return Promise.resolve
([this.cafele[6],this.cafele[3],this.cafele[8],this.cafele[0],this.cafele[5],this.cafele[9],this.cafele[1],this.cafele[7]]);
        //    case 249: return timer(206).pipe(mergeMap(e => throwError('Cafeneaua cu id 249 ridica intentionat o exceptie.')));
            case 7430: return Promise.resolve
([this.cafele[7],this.cafele[2],this.cafele[6],this.cafele[8],this.cafele[0],this.cafele[4]]);
            case 8283: return Promise.resolve
([this.cafele[3],this.cafele[1]]);
            case 1870: return Promise.resolve
([this.cafele[0],this.cafele[5],this.cafele[9],this.cafele[6],this.cafele[4],this.cafele[2],this.cafele[1]]);
            case 8064: return Promise.resolve
([this.cafele[0],this.cafele[6],this.cafele[2]]);
            case 5101: return Promise.resolve
([this.cafele[2],this.cafele[4],this.cafele[0],this.cafele[8],this.cafele[1],this.cafele[5],this.cafele[9]]);
            case 9599: return Promise.resolve
([this.cafele[2],this.cafele[3],this.cafele[4],this.cafele[6],this.cafele[8],this.cafele[5],this.cafele[0],this.cafele[9]]);
            case 8743: return Promise.resolve
([this.cafele[4],this.cafele[0],this.cafele[7],this.cafele[8],this.cafele[5],this.cafele[9],this.cafele[6],this.cafele[3]]);
            case 8229: return Promise.resolve
([this.cafele[6],this.cafele[1]]);
            case 4041: return Promise.resolve
([this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[0],this.cafele[9],this.cafele[4],this.cafele[8],this.cafele[3],this.cafele[1]]);
       //     case 3062: return timer(800).pipe(mergeMap(e => throwError('Cafeneaua cu id 3062 ridica intentionat o exceptie.')));
         //   case 1308: return timer(817).pipe(mergeMap(e => throwError('Cafeneaua cu id 1308 ridica intentionat o exceptie.')));
            case 4513: return Promise.resolve
([this.cafele[1],this.cafele[8],this.cafele[0],this.cafele[6],this.cafele[2],this.cafele[7],this.cafele[5],this.cafele[9],this.cafele[4]]);
            case 5484: return Promise.resolve
([this.cafele[8],this.cafele[6],this.cafele[2],this.cafele[1],this.cafele[7],this.cafele[5],this.cafele[4],this.cafele[9],this.cafele[3]]);
            case 5778: return Promise.resolve
([this.cafele[2],this.cafele[4],this.cafele[3],this.cafele[5],this.cafele[1],this.cafele[0],this.cafele[7]]);
            case 106: return Promise.resolve
([this.cafele[6],this.cafele[7],this.cafele[3],this.cafele[9],this.cafele[8]]);
            case 3072: return Promise.resolve
([this.cafele[8],this.cafele[1],this.cafele[7],this.cafele[3],this.cafele[2],this.cafele[0],this.cafele[4],this.cafele[6]]);
            case 3526: return Promise.resolve
([this.cafele[8],this.cafele[6],this.cafele[1],this.cafele[9],this.cafele[5],this.cafele[4],this.cafele[2],this.cafele[7]]);
            case 5627: return Promise.resolve
([this.cafele[6],this.cafele[8],this.cafele[0]]);
            case 9932: return Promise.resolve
([this.cafele[4],this.cafele[7],this.cafele[0],this.cafele[1]]);
       //     case 7516: return timer(523).pipe(mergeMap(e => throwError('Cafeneaua cu id 7516 ridica intentionat o exceptie.')));
        //    case 3552: return timer(210).pipe(mergeMap(e => throwError('Cafeneaua cu id 3552 ridica intentionat o exceptie.')));
            case 2066: return Promise.resolve
([this.cafele[1],this.cafele[7],this.cafele[9]]);
            case 4382: return Promise.resolve
([this.cafele[8],this.cafele[0],this.cafele[3],this.cafele[5]]);
            case 269: return Promise.resolve
([this.cafele[6],this.cafele[0],this.cafele[3],this.cafele[1],this.cafele[7],this.cafele[9],this.cafele[2]]);
            case 8233: return Promise.resolve
([this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[1],this.cafele[4],this.cafele[9],this.cafele[7],this.cafele[8]]);
            case 2810: return Promise.resolve
([this.cafele[2],this.cafele[6],this.cafele[1],this.cafele[4],this.cafele[3],this.cafele[0],this.cafele[9],this.cafele[5],this.cafele[7]]);

            default:
                return new Error("Nu este un ID de cafea");
                //timer(500).pipe(mergeMap(e => throwError('Nu este un ID de cafenea')));
        }
    }
}
