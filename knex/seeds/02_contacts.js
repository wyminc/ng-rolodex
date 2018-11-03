
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: "Meaghan Gooderham",
          address: "14711 Lakewood Lane",
          mobile: "1891060438",
          work: "9992925278",
          home: "7289565285",
          email: "mgooderham0@ocn.ne.jp",
          twitter: "mgooderham0",
          instagram: "mgooderham0",
          github: "mgooderham0",
          created_by: 1
        }, {
          name: "Hermione Tubbs",
          address: "76556 La Follette Center",
          mobile: "5355722938",
          work: "1945517824",
          home: "7807126067",
          email: "htubbs1@purevolume.com",
          twitter: "htubbs1",
          instagram: "htubbs1",
          github: "htubbs1",
          created_by: 1
        }, {
          name: "Ernie Lonsdale",
          address: "07 American Ash Hill",
          mobile: "7572421246",
          work: "5907047988",
          home: "7758409792",
          email: "elonsdale2@dailymotion.com",
          twitter: "elonsdale2",
          instagram: "elonsdale2",
          github: "elonsdale2",
          created_by: 3
        }, {
          name: "Codie Suart",
          address: "95 Stuart Plaza",
          mobile: "4091076702",
          work: "5537430359",
          home: "9057370136",
          email: "csuart3@livejournal.com",
          twitter: "csuart3",
          instagram: "csuart3",
          github: "csuart3",
          created_by: 1
        }, {
          name: "Ricoriki Gear",
          address: "03 Glacier Hill Park",
          mobile: "3392454428",
          work: "5511865512",
          home: "4211092987",
          email: "rgear4@time.com",
          twitter: "rgear4",
          instagram: "rgear4",
          github: "rgear4",
          created_by: 2
        }, {
          name: "Maegan Worthing",
          address: "2759 Londonderry Junction",
          mobile: "5563053632",
          work: "9235666243",
          home: "9585428429",
          email: "mworthing5@springer.com",
          twitter: "mworthing5",
          instagram: "mworthing5",
          github: "mworthing5",
          created_by: 2
        }, {
          name: "Katalin Churchouse",
          address: "01871 Sauthoff Place",
          mobile: "5347325821",
          work: "5409390427",
          home: "8846677832",
          email: "kchurchouse6@taobao.com",
          twitter: "kchurchouse6",
          instagram: "kchurchouse6",
          github: "kchurchouse6",
          created_by: 1
        }, {
          name: "Tiertza Worcs",
          address: "56636 Garrison Lane",
          mobile: "2817072283",
          work: "2986713209",
          home: "8276083157",
          email: "tworcs7@clickbank.net",
          twitter: "tworcs7",
          instagram: "tworcs7",
          github: "tworcs7",
          created_by: 3
        }, {
          name: "Aube McMeekin",
          address: "89180 Mitchell Junction",
          mobile: "6614070589",
          work: "9356580385",
          home: "9179903624",
          email: "amcmeekin8@simplemachines.org",
          twitter: "amcmeekin8",
          instagram: "amcmeekin8",
          github: "amcmeekin8",
          created_by: 1
        }, {
          name: "Vita Taft",
          address: "01446 Sunfield Parkway",
          mobile: "9892662545",
          work: "2698650958",
          home: "3977722720",
          email: "vtaft9@aboutads.info",
          twitter: "vtaft9",
          instagram: "vtaft9",
          github: "vtaft9",
          created_by: 2
        }, {
          name: "Gerladina Fliege",
          address: "6 Hoard Lane",
          mobile: "9474056519",
          work: "2928339972",
          home: "4431250921",
          email: "gfliegea@mashable.com",
          twitter: "gfliegea",
          instagram: "gfliegea",
          github: "gfliegea",
          created_by: 2
        }, {
          name: "Christalle Prosch",
          address: "9222 Roxbury Park",
          mobile: "2529309766",
          work: "2148366698",
          home: "5202084313",
          email: "cproschb@umn.edu",
          twitter: "cproschb",
          instagram: "cproschb",
          github: "cproschb",
          created_by: 1
        }, {
          name: "Estrella Portman",
          address: "40041 5th Street",
          mobile: "4505522908",
          work: "6401489552",
          home: "4298263687",
          email: "eportmanc@zdnet.com",
          twitter: "eportmanc",
          instagram: "eportmanc",
          github: "eportmanc",
          created_by: 1
        }, {
          name: "Conroy Goldsmith",
          address: "407 Hintze Park",
          mobile: "1795789793",
          work: "8754905061",
          home: "8148840006",
          email: "cgoldsmithd@va.gov",
          twitter: "cgoldsmithd",
          instagram: "cgoldsmithd",
          github: "cgoldsmithd",
          created_by: 3
        }, {
          name: "Svend Geekin",
          address: "530 Linden Plaza",
          mobile: "1263818096",
          work: "8127006245",
          home: "9556331707",
          email: "sgeekine@cisco.com",
          twitter: "sgeekine",
          instagram: "sgeekine",
          github: "sgeekine",
          created_by: 1
        }, {
          name: "Jane Dignam",
          address: "86 Knutson Street",
          mobile: "7757005013",
          work: "5645478074",
          home: "1063492293",
          email: "jdignamf@utexas.edu",
          twitter: "jdignamf",
          instagram: "jdignamf",
          github: "jdignamf",
          created_by: 3
        }, {
          name: "Lulu Kenan",
          address: "81 Bonner Alley",
          mobile: "1492491696",
          work: "6745697097",
          home: "9468910133",
          email: "lkenang@oracle.com",
          twitter: "lkenang",
          instagram: "lkenang",
          github: "lkenang",
          created_by: 3
        }, {
          name: "Pam Parsand",
          address: "876 Arrowood Crossing",
          mobile: "4749113594",
          work: "8849601809",
          home: "7566211469",
          email: "pparsandh@hexun.com",
          twitter: "pparsandh",
          instagram: "pparsandh",
          github: "pparsandh",
          created_by: 2
        }, {
          name: "Cherianne McCahey",
          address: "25430 Marcy Pass",
          mobile: "4096796017",
          work: "8004554686",
          home: "4609925073",
          email: "cmccaheyi@youku.com",
          twitter: "cmccaheyi",
          instagram: "cmccaheyi",
          github: "cmccaheyi",
          created_by: 1
        }, {
          name: "Issiah Dixcee",
          address: "87937 Brickson Park Circle",
          mobile: "7896374149",
          work: "4231354679",
          home: "3877823518",
          email: "idixceej@example.com",
          twitter: "idixceej",
          instagram: "idixceej",
          github: "idixceej",
          created_by: 2
        }, {
          name: "Douglas Stille",
          address: "2807 Darwin Alley",
          mobile: "6338253858",
          work: "7131560788",
          home: "7336378025",
          email: "dstillek@apache.org",
          twitter: "dstillek",
          instagram: "dstillek",
          github: "dstillek",
          created_by: 3
        }, {
          name: "Meriel Howis",
          address: "9171 Jackson Place",
          mobile: "6716219746",
          work: "6322983055",
          home: "3476847542",
          email: "mhowisl@harvard.edu",
          twitter: "mhowisl",
          instagram: "mhowisl",
          github: "mhowisl",
          created_by: 2
        }, {
          name: "Marlin O'Kinneally",
          address: "0 Stang Pass",
          mobile: "9061963404",
          work: "8197050797",
          home: "5819812032",
          email: "mokinneallym@cam.ac.uk",
          twitter: "mokinneallym",
          instagram: "mokinneallym",
          github: "mokinneallym",
          created_by: 1
        }, {
          name: "Emili Pauletto",
          address: "654 Truax Park",
          mobile: "4421026159",
          work: "5469938141",
          home: "2765170586",
          email: "epauletton@shop-pro.jp",
          twitter: "epauletton",
          instagram: "epauletton",
          github: "epauletton",
          created_by: 1
        }, {
          name: "Carin Dusey",
          address: "081 Tennyson Point",
          mobile: "7942747715",
          work: "2944568940",
          home: "3246041661",
          email: "cduseyo@walmart.com",
          twitter: "cduseyo",
          instagram: "cduseyo",
          github: "cduseyo",
          created_by: 1
        }
      ]);
    });
};
