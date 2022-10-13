// replace the current useInitializeApp with this one
import { ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export async function useInitializeApp() {
  const { storage, db } = useContext(AppContext);
  const data = [
    {
      inventory_remain: 11,
      name: "Doxylamine succinate",
      description:
        "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
      category: "Ford",
      is_deal: true,
    },
    {
      inventory_remain: 62,
      name: "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone",
      description:
        "tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
      category: "Mitsubishi",
      is_deal: true,
    },
    {
      inventory_remain: 21,
      name: "zolpidem tartrate",
      description:
        "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat",
      category: "Aston Martin",
      is_deal: true,
    },
    {
      inventory_remain: 64,
      name: "Terbinafine Hydrochloride",
      description:
        "risus dapibus augue vel accumsan tellus nisi eu orci mauris",
      category: "Mazda",
      is_deal: true,
    },
    {
      inventory_remain: 62,
      name: "Curly Dock",
      description:
        "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
      category: "Land Rover",
      is_deal: true,
    },
    {
      inventory_remain: 76,
      name: "Avobenzone, Octinoxate, and Octisalate",
      description:
        "dolor quis odio consequat varius integer ac leo pellentesque ultrices",
      category: "Maserati",
      is_deal: false,
    },
    {
      inventory_remain: 65,
      name: "Allopurinol",
      description:
        "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
      category: "Porsche",
      is_deal: true,
    },
    {
      inventory_remain: 100,
      name: "Bayberry",
      description:
        "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
      category: "Isuzu",
      is_deal: false,
    },
    {
      inventory_remain: 50,
      name: "Causticum 30c, Graphites 30c, Hepar Sulph 30c, Mag Phos 30c, Magnetis Polus Australis 30c, Nat Mur 30c, Nitricum Acidum 30c, Phosphoricum Ac 30c, Silicea 30c, sulphur 30c, Thuja 30c, Teucrium 30c",
      description:
        "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
      category: "Mazda",
      is_deal: false,
    },
    {
      inventory_remain: 73,
      name: "Quetiapine fumarate",
      description:
        "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
      category: "Suzuki",
      is_deal: true,
    },
    {
      inventory_remain: 58,
      name: "HYDROMORPHONE HYDROCHLORIDE",
      description:
        "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
      category: "Toyota",
      is_deal: true,
    },
    {
      inventory_remain: 24,
      name: "Sodium Chloride, Calcium Chloride, Potassium Chloride",
      description:
        "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
      category: "Aptera",
      is_deal: true,
    },
    {
      inventory_remain: 67,
      name: "Isopropyl Alcohol",
      description:
        "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
      category: "Lexus",
      is_deal: true,
    },
    {
      inventory_remain: 44,
      name: "Ramipril",
      description:
        "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
      category: "Jeep",
      is_deal: true,
    },
    {
      inventory_remain: 97,
      name: "fibrinogen human and thrombin human",
      description:
        "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
      category: "Isuzu",
      is_deal: false,
    },
    {
      inventory_remain: 12,
      name: "Apis mel., Arsenicum alb., Calc. carb., Dulcamara, Graphites, Hepar sulph. calc., Hydrastis, Hydrofluoricum acidum, Kali carb., Lycopodium, Mezereum, Oleander, Petroleum, Phosphoricum ac., Phosphorus, Rhus toxicodendron, Selenium, Sepia, Silicea, Sulphur, Thuja occ.",
      description:
        "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
      category: "Honda",
      is_deal: true,
    },
    {
      inventory_remain: 71,
      name: "donepezil hydrochloride",
      description:
        "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
      category: "Chevrolet",
      is_deal: false,
    },
    {
      inventory_remain: 93,
      name: "Titanium dioxide",
      description:
        "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
      category: "BMW",
      is_deal: true,
    },
    {
      inventory_remain: 60,
      name: "Doxazosin Mesylate",
      description:
        "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
      category: "Audi",
      is_deal: true,
    },
    {
      inventory_remain: 17,
      name: "Acetaldehyde",
      description:
        "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
      category: "Mercury",
      is_deal: true,
    },
    {
      inventory_remain: 12,
      name: "candida parapsilosis",
      description:
        "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
      category: "Honda",
      is_deal: true,
    },
    {
      inventory_remain: 4,
      name: "Triclosan",
      description:
        "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
      category: "Chevrolet",
      is_deal: true,
    },
    {
      inventory_remain: 12,
      name: "PULSATILLA VULGARIS",
      description:
        "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
      category: "Dodge",
      is_deal: false,
    },
    {
      inventory_remain: 78,
      name: "Naproxen",
      description:
        "ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
      category: "Chevrolet",
      is_deal: false,
    },
    {
      inventory_remain: 69,
      name: "Silver Sulfadiazine",
      description:
        "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
      category: "Toyota",
      is_deal: true,
    },
    {
      inventory_remain: 34,
      name: "ethyl alcohol",
      description:
        "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
      category: "Cadillac",
      is_deal: false,
    },
    {
      inventory_remain: 38,
      name: "ALUMINUM ZIRCONIUM TRICHLOROHYDREX GLY",
      description:
        "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
      category: "Mazda",
      is_deal: true,
    },
    {
      inventory_remain: 2,
      name: "Octinoxate and Oxybenzone",
      description:
        "quam a odio in hac habitasse platea dictumst maecenas ut massa",
      category: "Honda",
      is_deal: false,
    },
    {
      inventory_remain: 74,
      name: "AVOBENZONE, OCTINOXATE, OCTISALATE, OXYBENZONE",
      description:
        "curabitur gravida nisi at nibh in hac habitasse platea dictumst",
      category: "Maserati",
      is_deal: false,
    },
    {
      inventory_remain: 18,
      name: "LOSARTAN POTASSIUM AND HYDROCHLOROTHIAZIDE",
      description:
        "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
      category: "Ford",
      is_deal: false,
    },
    {
      inventory_remain: 92,
      name: "Fluorouracil",
      description:
        "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
      category: "GMC",
      is_deal: false,
    },
    {
      inventory_remain: 13,
      name: "dextromethorphan polistirex",
      description:
        "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
      category: "Isuzu",
      is_deal: true,
    },
    {
      inventory_remain: 9,
      name: "Benzalkonium chloride",
      description: "sapien a libero nam dui proin leo odio porttitor id",
      category: "Buick",
      is_deal: false,
    },
    {
      inventory_remain: 67,
      name: "Fire Ant",
      description:
        "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
      category: "Dodge",
      is_deal: true,
    },
    {
      inventory_remain: 18,
      name: "Ethyl Alcohol",
      description:
        "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
      category: "Dodge",
      is_deal: true,
    },
    {
      inventory_remain: 97,
      name: "TOLNAFTATE",
      description:
        "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
      category: "Volkswagen",
      is_deal: false,
    },
    {
      inventory_remain: 39,
      name: "Peppermint Candy Cane Lip Balm",
      description:
        "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
      category: "Volkswagen",
      is_deal: false,
    },
    {
      inventory_remain: 41,
      name: "Titanium Dioxide and Zinc Oxide",
      description:
        "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
      category: "Ford",
      is_deal: true,
    },
    {
      inventory_remain: 85,
      name: "Penicilium chrysogenum",
      description:
        "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
      category: "Acura",
      is_deal: true,
    },
    {
      inventory_remain: 66,
      name: "Clorazepate dipotassium",
      description:
        "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
      category: "Toyota",
      is_deal: false,
    },
    {
      inventory_remain: 1,
      name: "metoprolol tartrate",
      description: "in felis eu sapien cursus vestibulum proin eu mi nulla ac",
      category: "Chevrolet",
      is_deal: false,
    },
    {
      inventory_remain: 63,
      name: "Olanzapine",
      description:
        "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
      category: "BMW",
      is_deal: true,
    },
    {
      inventory_remain: 93,
      name: "Nicotine Polacrilex",
      description:
        "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
      category: "Buick",
      is_deal: false,
    },
    {
      inventory_remain: 49,
      name: "Morphine Sulfate",
      description:
        "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
      category: "Nissan",
      is_deal: true,
    },
    {
      inventory_remain: 27,
      name: "CHLOPHEDIANOL HYDROCHLORIDE and PYRILAMINE MALEATE",
      description:
        "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
      category: "Subaru",
      is_deal: true,
    },
    {
      inventory_remain: 1,
      name: "stavudine",
      description:
        "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
      category: "Mitsubishi",
      is_deal: false,
    },
    {
      inventory_remain: 19,
      name: "paroxetine hydrochloride hemihydrate",
      description:
        "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
      category: "Cadillac",
      is_deal: false,
    },
    {
      inventory_remain: 86,
      name: "LISINOPRIL AND HYDROCHLOROTHIAZIDE",
      description:
        "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
      category: "Dodge",
      is_deal: true,
    },
    {
      inventory_remain: 70,
      name: "galantamine hydrobromide",
      description:
        "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus",
      category: "Volkswagen",
      is_deal: false,
    },
    {
      inventory_remain: 93,
      name: "bupivacaine",
      description:
        "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
      category: "Mazda",
      is_deal: false,
    },
    {
      inventory_remain: 64,
      name: "Acetaminophen, Diphenhydramine HCl",
      description:
        "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
      category: "Land Rover",
      is_deal: true,
    },
    {
      inventory_remain: 56,
      name: "Glandulae suprarenales 4",
      description:
        "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
      category: "Toyota",
      is_deal: true,
    },
    {
      inventory_remain: 70,
      name: "Benzocaine",
      description:
        "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
      category: "Chevrolet",
      is_deal: false,
    },
    {
      inventory_remain: 44,
      name: "FERROUS IODIDE",
      description:
        "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
      category: "Toyota",
      is_deal: false,
    },
    {
      inventory_remain: 26,
      name: "Isosorbide Mononitrate",
      description:
        "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
      category: "Infiniti",
      is_deal: true,
    },
    {
      inventory_remain: 44,
      name: "Nevirapine",
      description:
        "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla",
      category: "Lincoln",
      is_deal: true,
    },
    {
      inventory_remain: 29,
      name: "Octinoxate and Oxybenzone",
      description:
        "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
      category: "Ford",
      is_deal: true,
    },
    {
      inventory_remain: 83,
      name: "SODIUM FLUORIDE",
      description:
        "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
      category: "Scion",
      is_deal: true,
    },
    {
      inventory_remain: 37,
      name: "levetiracetam",
      description:
        "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
      category: "Lincoln",
      is_deal: true,
    },
    {
      inventory_remain: 67,
      name: "Ciprofloxacin",
      description:
        "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
      category: "Infiniti",
      is_deal: false,
    },
    {
      inventory_remain: 10,
      name: "benzonatate",
      description:
        "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl",
      category: "Chevrolet",
      is_deal: true,
    },
    {
      inventory_remain: 74,
      name: "Rose Bengal",
      description:
        "ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
      category: "GMC",
      is_deal: false,
    },
    {
      inventory_remain: 76,
      name: "Acetaminophen",
      description:
        "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
      category: "GMC",
      is_deal: false,
    },
    {
      inventory_remain: 32,
      name: "Apis Arnica",
      description:
        "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
      category: "Hummer",
      is_deal: false,
    },
    {
      inventory_remain: 62,
      name: "Hamster Epithelium",
      description:
        "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
      category: "GMC",
      is_deal: false,
    },
    {
      inventory_remain: 75,
      name: "Bismuth Subsalicylate",
      description:
        "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
      category: "Pontiac",
      is_deal: false,
    },
    {
      inventory_remain: 98,
      name: "Pyrithione zinc",
      description:
        "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
      category: "Toyota",
      is_deal: true,
    },
    {
      inventory_remain: 46,
      name: "Camphor, Menthol, Methyl Salicylate",
      description:
        "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
      category: "Volkswagen",
      is_deal: true,
    },
    {
      inventory_remain: 68,
      name: "LIDOCAINE HYDROCHLORIDE and EPINEPHRINE BITARTRATE",
      description:
        "risus dapibus augue vel accumsan tellus nisi eu orci mauris",
      category: "Audi",
      is_deal: false,
    },
    {
      inventory_remain: 27,
      name: "Cetirizine Hydrochloride",
      description:
        "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat",
      category: "Hyundai",
      is_deal: false,
    },
    {
      inventory_remain: 13,
      name: "Phenylephrine Hydrochloride",
      description:
        "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
      category: "Jaguar",
      is_deal: true,
    },
    {
      inventory_remain: 88,
      name: "Metformin Hydrochloride",
      description:
        "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
      category: "GMC",
      is_deal: false,
    },
    {
      inventory_remain: 10,
      name: "Zinc Acetate and Pramoxine Hydrochloride",
      description:
        "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
      category: "Chevrolet",
      is_deal: true,
    },
    {
      inventory_remain: 72,
      name: "RABEPRAZOLE SODIUM",
      description:
        "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien",
      category: "Audi",
      is_deal: false,
    },
    {
      inventory_remain: 94,
      name: "Triclosan",
      description:
        "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
      category: "Scion",
      is_deal: true,
    },
    {
      inventory_remain: 17,
      name: "Dicyclomine Hydrochloride",
      description:
        "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
      category: "Dodge",
      is_deal: true,
    },
    {
      inventory_remain: 75,
      name: "Treatment Set TS329526",
      description:
        "mattis nibh ligula nec sem duis aliquam convallis nunc proin",
      category: "Land Rover",
      is_deal: true,
    },
    {
      inventory_remain: 88,
      name: "Ethyl Alcohol",
      description:
        "posuere cubilia curae nulla dapibus dolor vel est donec odio",
      category: "Toyota",
      is_deal: false,
    },
    {
      inventory_remain: 7,
      name: "White Tea Antibacterial",
      description:
        "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
      category: "Oldsmobile",
      is_deal: true,
    },
    {
      inventory_remain: 76,
      name: "SODIUM MONOFLUOROPHOSPHATE",
      description:
        "egestas metus aenean fermentum donec ut mauris eget massa tempor",
      category: "Ford",
      is_deal: false,
    },
  ];

  // make sure you change the storage rules to public, so that anyone can access it
  const imagesName = [
    "apple.jpg",
    "coke.jpg",
    "egg.jpg",
    "lays.png",
    "salad.jpg",
  ];
  const images = [];

  for (const name of imagesName) {
    const productRef = ref(storage, `products/${name}`);
    const link = await getDownloadURL(productRef);
    images.push(link);
  }
  data.map(async (element, index) => {
    const docRef = await addDoc(collection(db, "products"), {
      ...element,
      image_url: images[index % 5],
    });

    return docRef;
  });
}
