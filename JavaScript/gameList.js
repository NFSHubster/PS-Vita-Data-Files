document.addEventListener("DOMContentLoaded", function () {
  let activeCategory = "all";
  const games = [
    {
      name: "Grand Theft Auto III",
      image:
        "https://play-lh.googleusercontent.com/3gzidHrtPm8yGZfItWHEIYclWTjcOhd4KMf40Igcv3mOW_KD7T_4oh5A_pMb1E5NOrA",
      category: "datafile",
      link: "https://www.mediafire.com/file/nfcc6u938mxnmgs/gta3.zip/file",
      details: {
  author: "Rinnegatamante",
  version: "v1.4",
  size: "2.01 GBs",
}

    },
    {
      name: "Grand Theft Auto Vice City",
      image:
        "https://rexdl.com/wp-content/uploads/2017/08/grand-theft-auto-vice-city-android-thumb.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/file/cpnu899gis7hzzq/gtavc.zip/file",
      details: {
  author: "Rinnegatamante",
  version: "v1.1",
  size: "1.34 GBs",
      }
    },
    {
      name: "Grand Theft Auto San Andreas",
      image:
        "https://play-lh.googleusercontent.com/XRlCpj22PFJuFK43QcE3u5RxmoNUed7YO_zG-6F1PCqjrBIIURbTBDvTgLVVIk5pNeY",
      category: "datafile",
      link: "https://www.mediafire.com/file/nl15z2mhs4lg947/gtasa.zip/file",
      details: {
  author: "TheOfficialFloW",
  version: "v2.1",
  size: "1.77 GBs",
      }
    },
    {
      name: "Grand Theft Auto Chinatown Wars",
      image:
        "https://play-lh.googleusercontent.com/cNE2roM5cV3F2VFABVGVIzjmfanWzMiTiOzIQCtKR9X1EFIHowqhav5wM2_ZmnZAoLY",
      category: "datafile",
      link: "https://www.mediafire.com/file/z1h025ydqjekoc2/gtactw.zip/file",
      details: {
  author: "TheOfficialFloW",
  version: "v1.2",
  size: "521.84 MBs",
      }
    },
    {
      name: "Max Payne",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5f/e4/1e/5fe41e51-3d3b-d396-cb4a-923322bfe4b4/source/512x512bb.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/file/zed8eoxhab149g6/maxpayne.zip/file",
      details: {
  author: "fgsfdsfgs",
  version: "r4",
  size: "687.14 MBs",
      }
    },
    {
      name: "Bully",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.qZl_15lW2n0hv2THdD3czAHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/file/zqfbomec81ixu69/Bully.zip/file",
      details: {
  author: "TheOfficialFloW",
  version: "v1.0",
  size: "1.99 GBs",
      }
    },
    {
      name: "Hollow Knight",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.yksrDyeoiGInEdKYFyreeQHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://drive.google.com/file/d/1a_sRARvwmFn3da-TPp4hxY78hhNkkSW9/view?usp=sharing",
      details: {
  author: "PatnosD",
  version: "v0.81 Hotfix",
  size: "382 MBs",
      }
    },
    {
      name: "Cuphead",
      image:
        "https://image.api.playstation.com/vulcan/img/cfn/11307fllh6D-IvbpCa18N0vRggVeRYWA06paTNCj3DENJMScAzW2f3ry4IwFcXBAt9kWXdZGpGoOGjxJ_e9MdordMVAosNhZ.png",
      category: "datafile",
      link: "https://drive.google.com/file/d/1rbqc04E4IZXZD3RtTR5cIxkKsohHM4AQ/view?usp=sharing",
      details: {
  author: "PatnosD",
  version: "v0.81",
  size: "322 MBs",
      }
    },
    {
      name: "Balatro",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202401/2218/d8c5d5861249cd80a300efb723450f56d0347e4345e2eb80.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/r9x6x3xr5bswaed/Balatro_V0.12.vpk/file",
      details: {
  author: "Daexxxx",
  version: "v0.11",
  size: "57.97 MBs",
      }
    },
    {
      name: "devilutionX/Diablo 1",
      image:
        "https://play-lh.googleusercontent.com/TkJVdT7FvFf16WmqxKp9XfJ7Pjy0a0GhVo3gXYk6OeTn7d59SF4K0Fst2cAf2xAyIA",
      category: "datafile",
      link: "https://www.mediafire.com/folder/2tc0z0a56a0ye/diasurgical",
      details: {
  author: "Diasurgical",
  version: "v1.5.4",
  size: "668 MBs",
      }
    },
    {
      name: "Blasphemous",
      image:
        "https://images.nintendolife.com/2de5ec267262e/blasphemous-cover.cover_large.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/file/1958318axcnco2k/Blasphemous_Vita_Port.7z/file",
      details: {
  author: "gl00mm",
  version: "beta-1",
  size: "361.74 MBs",
      }
    },
    {
      name: "This War of Mine",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.qwjzy02CT3wIUYfS7aeuzAHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/file/ossr9giltvaasjl/This_War_of_Mine.rar/file",
      details: {
  author: "TheOfficialFloW",
  version: "v1.0",
  size: "525.84 MBs",
      }
    },
    {
      name: "Fahrenheit: Indigo Prophecy",
      image:
        "https://pdacdn.com/app/59522c32d4d57/fahrenheit-indigo-prophecy.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/018vreisks2ulim/fahrenheit_v0.8.ZIP/file",
      details: {
  author: "Rinnegatamante",
  version: "v0.8",
  size: "2.54 GBs",
      }
    },
    {
      name: "Cook! Serve! Delicious!",
      image:
        "https://play-lh.googleusercontent.com/4jzgsPrAcV7ybbXJmNL-gEo9aIF0e9hivPVWtrUzYKw7QwsVo0lZYnlnmhkicHzpbcle",
      category: "datafile",
      link: "https://mega.nz/file/3NZBgaoa#vGBl5rhr09e6AjN_vn2fHmFnlwphvaAA9KgQh5_qgVI",
      details: {
  author: "MDashK",
  version: "v1.0",
  size: "82 MBs",
      }
    },
    {
      name: "Cook, Serve, Delicious! 3?!",
      image:
        "https://www.cookservedelicious.com/yum/wp-content/uploads/2019/07/csd3_logo_final_transparent_500x_stroke.png",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/1d9CRaUbTp4q44LDzhRG3zUKnhDxlrW_N?usp=sharing",
      details: {
  author: "MDashK",
  version: "v1.0",
  size: "269.4 MBs",
      }
    },
    {
      name: "Flop Rocket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0fgUjl_hWbtKrSjN2U8MtvPgXpsUKCBhdg&s",
      category: "datafile",
      link: "https://mega.nz/file/2U4jWA7Q#A4YF-VL2F2QahR0S0-2ap00nhILukvAXr9FtxzGkZ6c",
      details: {
  author: "MDashK",
  version: "v1.0",
  size: "44.3 MBs",
      }
    },
    {
      name: "GUN GODZ",
      image:
        "https://img.itch.zone/aW1hZ2UvNjYwLzMxNDIucG5n/original/MuiN1f.png",
      category: "datafile",
      link: "https://mega.nz/file/XV4WnKyK#OSqAHgyFGheR2BmxTaMwGQv81eI8y8-4G4Ymp5djkqc",
      details: {
  author: "m1s3ry",
  version: "v1.0",
  size: "21.3 MBs",
      }
    },
    {
      name: "IMSCARED",
      image:
        "https://play-lh.googleusercontent.com/msfvJf882RBpfVdckSaY9GrxSbCRFT7fH5bLXDR82Oskp1T7rclgKFWy5B7c__4rW1A",
      category: "datafile",
      link: "https://mega.nz/file/DRoDWZiA#TFiPSj0Fbdne9NR2ljX5LWmrFz3BwKuowrSYILzeoFE",
      details: {
  author: "imscared",
  version: "v1.2",
  size: "38.9 MBs",
      }
    },
    {
      name: "Minit",
      image:
        "https://img.tapimg.net/market/images/96ef3106c0bb2ceeff889163fff4ca20.png/appicon?t=1",
      category: "datafile",
      link: "https://mega.nz/file/DAJRDapD#nbv6Frhx-55VJUXgqxFS14w5_RnJr-gDDZrHIS2xWLs",
      details: {
  author: "m1s3ry",
  version: "v1.1",
  size: "166.6 MBs",
      }
    },
    {
      name: "Please, Don't Touch Anything",
      image:
        "https://play-lh.googleusercontent.com/umdM8MaI87D-rR4D0qX-GqDv_s6Ewh0Zbx14VQgk0SNIWZ8JAENS7pXZ--3p7lL6ciI",
      category: "datafile",
      link: "https://mega.nz/file/3IB22CJZ#jIPe8gySESdxRcUroQfWM3fAdCAkrDz6PyDKgdmhiIc",
      details: {
  author: "hatoving",
  version: "v1.0",
  size: "34.2 MBs",
      }
    },
    {
      name: "Franbow Chapter 1",
      image:
        "https://play-lh.googleusercontent.com/dd380Gx3aBDUeGdD51WiesMoOI429mAVzjQKqqQxQXwaOq5I6KNanx1ZazEyVUXqkLs",
      link: "https://www.mediafire.com/file/ekfkjsuxanjd91n/FBCH10408_-_Fran_Bow_Chapter_1_-_With_game_data.vpk/file",
      category: "datafile",
      details: {
  author: "hatoving",
  version: "v2.07",
  size: "94.29 MBs",
      }
    },
    {
      name: "Franbow Chapter 2",
      image:
        "https://play-lh.googleusercontent.com/rEBXyKqDe6D610A8--a2iL1z-yePJDZfqoDFOZUBuQtR2RMzouiEm4eHTXrmJNpnBi8",
      category: "datafile",
      link: "https://www.mediafire.com/file/q5c1pce9afchcxr/FBCH20409_-_Fran_Bow_Chapter_2_-_With_game_data.vpk/file",
      details: {
  author: "hatoving",
  version: "v2.02",
  size: "146.81 MBs",
      }
    },
    {
      name: "Franbow Chapter 3",
      image:
        "https://play-lh.googleusercontent.com/GqJZHn8dx7Cae4vqdZq9uTG3pI2NE1Mn2ufTS90ner3pDVFpjBQNpY56YEedOkxwvZ6_",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/1BAnvRyJHairY8fG89OnpHhy_DfL61hFZ?usp=sharing",
      details: {
  author: "hatoving",
  version: "v1.0",
  size: "219.4 MBs",
      }
    },
    {
      name: "Franbow Chapter 4",
      image:
        "https://play-lh.googleusercontent.com/pPIpIrFuEcEeSeud0mN5lOKy-O9eb-gvWk7wdzXmoUfi9c67vNZ9xdMGO6wu3GxZqVM",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/152-NS6ZkLP1Eep8y8o6v9lDLQmR7jdMN?usp=sharing",
      details: {
  author: "hatoving",
  version: "v1.00",
  size: "116.2 MBs",
      }
    },
    {
      name: "LOVE",
      image:
        "https://pdacdn.com/app/5f015182381f4/love.png",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/1ofxqlIQSRghsN9xjHaefkNJDQWfV1qTz?usp=sharing",
      details: {
  author: "hatoving",
  version: "v1.00",
  size: "38.9 MBs",
      }
    },
    {
      name: "VVVVVV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rhau3sLorFbNKZoU4A7eNPtN3ZxcnM6U-g&s",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/13aS4AYL0ebsCPN75rANBQM4qBAji57B5?usp=sharing",
      details: {
  author: "isage",
  version: "v2.3.4-vita",
  size: "60.6 MBs",
      }
    },
    {
      name: "xash3d/Half-Life & Counter Strike",
      image:
        "https://image.winudf.com/v2/image/aW4uY2VsZXN0Lnhhc2gzZC5obF9pY29uXzE1MzE2MDU4OTlfMDQ5/icon.png?w=184&fakeurl=1",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Half%20Life%20%2B%20Counter%20Strike%20%28xash3d%29.zip",
      details: {
  author: "fgsfdsfgs",
  version: "mp-fix",
  size: "820 MBs",
      }
    },
    {
      name: "Dead Space Mobile",
      image:
        "https://assets-prd.ignimgs.com/2023/01/14/deadspacem-1673686414670.jpg",
      category: "datafile",
      link: "https://drive.google.com/file/d/1AGOIwAghBotGb7fyeVfVHC8sqOUG0Wss/view?usp=sharing",
      details: {
  author: "v-atamanenko",
  version: "v1.3",
  size: "139 MBs",
      }
    },
    {
      name: "Battlefield Bad Company 2",
      image:
        "https://assets-prd.ignimgs.com/2022/01/04/battlefield-bad-company-2-button-crop-1641279153499.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Battlefield%3A%20Bad%20Company%202.zip",
      details: {
  author: "TheOfficialFloW",
  version: "v1.0",
  size: "568 MBs",
      }
    },
    {
      name: "Need for Speed: Hot Pursuit",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ZK13PerQ7J_thdmhwZ-aWgHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/NFS%20Hot%20Pursuit.zip",
      details: {
  author: "Electry",
  version: "v1.0",
  size: "419 MBs",
      }
    },
    {
      name: "Mass Effect Infiltrator",
      image: "https://tse2.mm.bing.net/th?id=OIP.BfzLpV9lQUWcFukrHFd8wQHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/masseffect.zip",
      details: {
  author: "v-atamanenko",
  version: "v1.0",
  size: "248 MBs",
      }
    },
    {
      name: "Simpsons Hit & Run",
      image:
        "https://gbatemp.net/attachments/the-simpsons-hit-run-01ad26d9bb584000-jpg.400032/",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Simpsons%20Hit%20%26%20Run%20%28Original%20Cutscenes%29.7z",
      details: {
  author: "ZenoArrows",
  version: "v0.6.1",
  size: "1.4 GBs",
      }
    },
    {
      name: "Deltarune",
      image:
        "https://image.winudf.com/v2/image1/ZGVsdC5ldXMuYXJ1bl9pY29uXzE1NDM5MDk5MzlfMDMz/icon.png?w=184&fakeurl=1",
      category: "datafile",
      link: "https://www.mediafire.com/file/jy1okv1cihkf26q/Deltarune-PSVita.vpk/file",
      details: {
  author: "tijesef",
  version: "v1.0",
  size: "64.09 MBs",
      }
    },
    {
      name: "LEGO Star Wars: The Complete Saga",
      image:
        "https://play-lh.googleusercontent.com/4X41U-wqnwWpnYBfWmeHsAOkLNvLpWJ4BXeZn0wqu2XzBpLNLvkvOPnBqAnMUOygOQ",
      category: "datafile",
      link: "https://www.mediafire.com/file/2qhxrbu0k14jk4o/lswtcs.zip/file",
      details: {
  author: "gm666q",
  version: "v0.1",
  size: "1.25 GBs",
      }
    },
    {
      name: "Portal",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.eoD86qAF9q8meopfwBJYGQHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://mega.nz/file/tRMy1DJI#LU-PwN0-BDkNTu01gJgVRXdWGjOzwYRwh4gNyE7wZK4",
      details: {
  author: "Dan Cooper",
  version: "v1.0",
  size: "257.8 MBs",
      }
    },
    {
      name: "Streets of Rage Remake",
      image:
        "https://img.utdstc.com/icon/92a/839/92a839b477f5e13424e906a9267a136ef2f9dce04c11f1a9acd7bfa1291baa49:200",
      category: "datafile",
      link: "https://www.mediafire.com/folder/eu9tlr8fe640b/Streets_of_Rage_Remake",
       details: {
  author: "isage",
  version: "v1.3",
  size: "327 MBs",
      }
    },
    {
      name: "Shadow Warrior",
      image:
        "https://play-lh.googleusercontent.com/iBFtK_5TrtXRVU9ESK73dmfcc2K9wByrDYfrdCo1rL5H_-fbfNSld-a7ZwtTNBOg1mE",
      category: "datafile",
      link: "https://www.mediafire.com/folder/2ph3mijz0bng1/Shadow_Warrior",
      details: {
  author: "Rinnegatamante",
  version: "v0.0.2",
  size: "107 MBs",
      }
    },
    {
      name: "Final Fantasy Dimensions",
      image:
        "https://assets-prd.ignimgs.com/2022/05/23/ffdimensions-1653332120734.jpg?width=300&crop=1:1%2Csmart",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Fina%20Fantasy%20Dimensions.zip",
      details: {
  author: "Rinnegatamante",
  version: "v1.2",
  size: "180 MBs",
      }
    },
    {
      name: "Final Fantasy 3",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202301/1210/7SjuZOeJFmJutHbNviOsfhHa.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%203%20%28ff3%29.zip",
      details: {
  author: "frangarcj",
  version: "v1.1",
  size: "337 MBs",
      }
    },
    {
      name: "Final Fantasy 4",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.BQ-saEVLM4FxubmbkEkHVwHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%204%20%28ff4%29.zip",
      details: {
  author: "Rinnegatamante",
  version: "v1.3.1",
  size: "519 MBs",
      }
    },
    {
      name: "Final Fantasy 4 The After Years",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.iAzlMiMXLdHus_aP5ERY5QHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%20After%20Years%28ff4a%29.zip",
      details: {
  author: "Rinnegatamante",
  version: "v1.0.1",
  size: "454 MBs",
      }
    },
    {
      name: "Final Fantasy 5",
      image: "https://gamefaqs.gamespot.com/a/box/7/8/8/929788_front.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%205%20%28ff5%29.zip",
      details: {
  author: "frangarcj",
  version: "v1.0",
  size: "126 MBs",
      }
    },
    {
      name: "Doki Doki Literature Club",
      image: "https://pdacdn.com/app/5ffc22db87d6d/doki_doki_literature_club-logo.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/athfkxpgit604zi/Doki.Doki.Literature.Club-01.01.vpk/file",
      details: {
  author: "SonicMastr",
  version: "v1.0",
  size: "208.87 MBs",
      }
    },
    {
      name: "7 Billion Humans",
      image: "https://play-lh.googleusercontent.com/s9HPmfJob3F2q2QjtF_Z7asRMRa7kPqcM_DpAfhoR-5CSqRzKey8h-ZzeoHu3VJyHQ",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/1GD2Tk9R7uVR0Pc5o_On-tOs0QdWqPiNW?usp=drive_link",
      details: {
  author: "Rinnegatamante",
  version: "v1.1",
  size: "136 MBs",
      }
    },
    {
      name: "Carmageddon",
      image:
        "https://pdacdn.com/app/59522b07393d8/carmageddon.png",
      category: "datafile",
      link: "https://www.mediafire.com/folder/255dynf60gcrv/Carmageddon",
      details: {
  author: "Rinnegatamante",
  version: "v1.0",
  size: "141 MBs",
      }
    },
    {
      name: "Carmageddon Splat Pack",
      image:
        "https://assets-prd.ignimgs.com/2022/05/13/carmageddon-splat-pack-button-1652403026426.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/folder/7ekyo92xjx682/Carmageddon_Splat_Pack",
      details: {
  author: "Rinnegatamante",
  version: "v1.0",
  size: "186 MBs",
      }
    },
    {
      name: "Ducktales: Remastered",
      image:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2015/04/nexus2cee_app-cover1.png",
      category: "datafile",
      link: "https://www.mediafire.com/folder/m3ra2j6mo17xk/Ducktales_Remastered",
      details: {
  author: "TechnicalJicama",
  version: "v1.0",
  size: "405 MBs",
      }
    },
    {
      name: "Modern Combat 3: Fallen Nation",
      image:
        "https://img.tapimg.net/market/images/34d23754f87ccac5cff8e5f28c678ba8.png",
      category: "datafile",
      link: "https://www.mediafire.com/folder/s3t22w98hlrxm/Modern_Combat_3",
      details: {
  author: "v-atamenenko",
  version: "v1.1",
  size: "745 MBs",
      }
    },
    {
      name: "Baba is You",
      image:
        "https://play-lh.googleusercontent.com/yBi3fqxlKVOUAogys4SqYfVmIYEBCsGAKbNdIUCUkxymzL5vZ2mUEqF5VAcTiDZYN6s",
      category: "datafile",
      link: "https://www.mediafire.com/folder/t3wa4aqcf0wqr/Baba_is_You",
      details: {
  author: "v-atamenenko",
  version: "v1.4",
  size: "87 MBs",
      }
    },
    {
      name: "Fallout 1",
      image:
        "https://assets-prd.ignimgs.com/2022/01/27/fallout-1-button-edit-1643322142537.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/fallout.7z",
      details: {
  author: "Northfear",
  version: "v1.1.0",
  size: "474 MBs",
      }
    },
    {
      name: "Fallout 2",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.da52RgYN84U8Vclwfp6pXgHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/fallout2.zip",
      details: {
  author: "Northfear",
  version: "v1.3.0",
  size: "552 MBs",
      }
    },
    {
      name: "Tom Clancy's Splinter Cell: Conviction",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.xLFkavflwT49Gmc5tZesewHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/file/mn5cm5cac7l9cz2/splintercell.7z/file",
      details: {
  author: "Rinnegatamante",
  version: "v1.1",
  size: "164.21 MBs",
      }
    },
    {
      name: "Crazy Taxi",
      image:
        "https://app.famitsu.com/wp-content/uploads/2013/07/CRAZYTAXI_icon.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/file/z58698zfgbbqt06/crazy_taxi_classic.zip/file",
      details: {
  author: "TheOfficialFloW",
  version: "v1.2",
  size: "135.17 MBs",
      }
    },
    {
      name: "Subway Surfers",
      image:
        "https://play-lh.googleusercontent.com/bBF-xD47BOb3nfbbXF-Isx8LdZHX_Uxz6h14ughVjhCVDzdWU2NeJzJIv1wW4F1q7Rw",
      category: "datafile",
      link: "https://www.mediafire.com/file/7cgatjzd61dtyrf/SubwaySurfers.vpk/file",
      details: {
  author: "PatnosD",
  version: "alpha-1",
  size: "40.81 MBs",
      }
    },
    {
      name: "Unsighted",
      image:
        "https://images.nintendolife.com/b70f39ee9780c/unsighted-cover.cover_300x.jpg",
      category: "datafile",
      link: "https://drive.google.com/file/d/1iSAoCEorNS-gWzyX1T7QVEYZe51szsrp/view?usp=sharing",
      details: {
  author: "PatnosD",
  version: "v0.3",
  size: "500 MBs",
      }
    },
    {
      name: "Muse Dash",
      image:
        "https://musedash.net/muse_dash_apk.webp",
      category: "datafile",
      link: "https://drive.google.com/file/d/1gtXQ0Jq-b5CFgrfSVX5qJ1JVJGMiFRlW/view",
      details: {
  author: "PatnosD",
  version: "v0.1",
  size: "67 MBs",
      }
    },
    {
      name: "RollerCoaster Tycoon 2 (OpenRCT2)",
      image:
        "https://i.namu.wiki/i/xZWGxdohJAH2H_051vtePuMWXYtQQ01mi6Uo2rRJeCIzzb1EEmhGubCKw27F1jQx6GvWZz1PNSAK8zQjEvBOLg.webp",
      category: "datafile",
      link: "https://www.mediafire.com/file/pz70ups9juzq44n/RCT2.7z/file",
      details: {
  author: "TechnicalJicama",
  version: "v1.0",
  size: "468.38 MBs",
      }
    },
    {
      name: "Command & Conquer: Red Alert (OpenRA)",
      image:
        "https://m.media-amazon.com/images/I/711BwJ0-iUL._SL1500_.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/folder/cc9u81vik1lgj/Command_and_Conquer_Red_Alert",
      details: {
  author: "Northfear",
  version: "v.1.0-r914",
  size: "1.04 GBs",
      }
    },
    {
      name: "Command & Conquer: Tiberian Dawn (OpenTD)",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/34/Command_%26_Conquer_1995_cover.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/folder/r9r54qoqq4b8d/Command_and_Conquer_Tiberian_Dawn",
      details: {
  author: "Northfear",
  version: "v.1.0-r914",
  size: "895 MBs",
      }
    },
    {
      name: "Zelda 3: A Link to the Past",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.iyXfCHXe45Y5MD24BM4yxgHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://drive.google.com/file/d/1PJAKw_qIrWdo52eWjfVdxedS0aMnNtNd/view",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2.1",
        size: "4 MBs",
            }
    },
    {
      name: "Super Mario 64",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.BvriPJra1wbseYngRo0dpwHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/file/4xe47qz7i8fw165/sm64.us.60fps.vpk/file",
      details: {
        author: "B45417 & rrhyacinth",
        version: "v.1.0",
        size: "6 MBs",
            }
    },
    {
      name: "Ultimate Spiderman: Total Mayhem",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Purple1/v4/7d/87/4a/7d874af2-b30a-ec51-fac8-b5ed01637a88/source/512x512bb.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Ultimate%20Spider-Man%3A%20Total%20Mayhem.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2",
        size: "156 MBs",
            }
    },
    {
      name: "Tomb Raider 1 & 2 Classic",
      image: "https://archive.org/download/tomb-raider-i/m_tomb-raider-i.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Tomb%20Raider%201%20and%202%20Classic%20v1.0.2.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2",
        size: "608 MBs",
            }
    },
    {
      name: "Spelunky Classic HD",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.eOLMS4QUJMZ6VC1eTt1ZigHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://github.com/SiulPop/Spelunky.Classic.HD.VITA./releases/download/speunky.vita/Spelunky-Classic.VPK",
      details: {
        author: "SiulPop",
        version: "v.1.0",
        size: "7.8 MBs",
            }
    },
    {
      name: "Soul Calibur",
      image:
        "https://image.gameapps.hk/images/201309/07/AAA.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Soulcalibur.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.1",
        size: "167 MBs",
            }
    },
    {
      name: "AM2R",
      image:
        "https://pdacdn.com/app/5b60019560ddd/1401-profile-am2r-another-metroid-2-remake.png",
      category: "datafile",
      link: "https://drive.google.com/file/d/1uLrBPL4MDjNAYxmXjdQk1cV2aYBj7ies/view?pli=1",
      details: {
        author: "tijesef",
        version: "v.1.4.5.1",
        size: "285.2 MBs",
            }
    },
    {
      name: "Jump King",
      image:
        "https://img.utdstc.com/icon/df6/fa4/df6fa459eb88a7231cbdd89ce9a0066ed860f244a0150e87d1910d395cf63165:200",
      category: "datafile",
      link: "https://github.com/Rocroverss/JumpKingGodot/releases/download/v1.01/JumpKing.vpk",
      details: {
        author: "Rocroverss",
        version: "v.1.0.1",
        size: "24.2 MBs",
            }
    },
    {
      name: "OttoMatic",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.LHKfiB4f4qzF7isLr1X9EgHaHZ&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/folder/h36ya3zzwita5/OttoMatic",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "138 MBs",
            }
    },
    {
      name: "Death Road to Canada",
      image:
        "https://play-lh.googleusercontent.com/rpC70ha-hZM85OroGMRlh4q5ff2oEpJWd2-Uqu5oGAdVgVMPG3aPbV4cvaN0G77wQg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Death%20Road%20to%20Canada.7z",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "76.4 MBs",
            }
    },
    {
      name: "Mighty Mike",
      image:
        "https://img.itch.zone/aW1nLzkxNzE4NTcuanBn/original/NZZtBG.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/folder/k8f5iesjwzuum/Mighty_Mike",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "8 MBs",
            }
    },
    {
      name: "The World Ends With You",
      image:
        "https://pdacdn.com/app/59522b75a52db/the-world-ends-with-you.png",
      category: "datafile",
      link: "https://drive.google.com/file/d/1gZ5v4mY8qtiOZ5t5_KPvQCJpuZOUYOo4/view?usp=sharing",
      footer: "Note: Create a folder in ux0/data and call it TWEWY in order for the game to create save files properly.",
      details: {
        author: "hatoving",
        version: "v.1.1",
        size: "714 MBs",
            }
    },
    {
      name: "Driver 2",
      image:
        "https://assets-prd.ignimgs.com/2022/10/10/driver2-1665446127223.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Driver%202.zip",
      details: {
        author: "OsirisX",
        version: "v.1.0",
        size: "429 MBs",
            }
    },
    {
      name: "Return To The Castle: Wolfenstein",
      image:
        "https://dl.apkawards.com/moda/dl16/games/rtcw4a/img/rtcw4a.png?v=22",
      category: "datafile",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Return%20to%20Castle%20Wolfenstein.7z",
      details: {
        author: "Rinnegatamante",
        version: "v.0.6",
        size: "652 MBs",
            }
    },
    {
      name: "Wolfenstein 3D",
      image:
        "https://images.sftcdn.net/images/t_app-icon-m/p/d5ae8d92-96d7-11e6-b21e-00163ed833e7/2185270521/wolfenstein-3d-download.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Wolfenstein%203D.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.7",
        size: "2.1 MBs",
            }
    },
    {
      name: "Wolfenstein RPG",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkpZzXfTtrWFbEI3_Yu0voDPqoN7u7livHQ&s",
      category: "datafile",
      link: "https://www.mediafire.com/file/beaqov4888j8b4j/wolf-rpg.7z/file",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "25.99 MBs",
            }
    },
    {
      name: "Mario Kart Vita",
      image:
        "https://www.vita.unaux.com/img/mkv.webp",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Mario%20Kart%20Vita.zip",
      details: {
        author: "VitaHex",
        version: "v.1.21",
        size: "104 MBs",
            }
    },
    {
      name: "Crashlands",
      image:
        "https://pdacdn.com/app/59522c2382277/crashlands.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/h803vpygycl2tc4/CRASHLAND_-_With_game_data_-_FIXED_ERROR__0x80870005.VPK/file",
      details: {
        author: "m1s3ry",
        version: "v.1.0.0",
        size: "68.07 MBs",
            }
      
    },
    {
      name: "Bugdom",
      image:
        "http://www.mobygames.com/images/covers/l/11020-bugdom-windows-front-cover.jpg",
      category: "datafile",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Bugdom.vpk",
      details: {
        author: "jorio",
        version: "v.1.3.4",
        size: "48 MBs",
            }
    },
    {
      name: "Bugdom 2",
      image:
        "https://img.tapimg.net/market/images/6fc7ab57f3e1939768435366e9e4ba67.jpg/appicon?t=1",
      category: "datafile",
      link: "https://www.mediafire.com/folder/fq8gvvk43d14k/Bugdom_2",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "126 MBs",
            }
    },
    {
      name: "Doom RPG",
      image:
        "https://img.utdstc.com/icon/a40/0ac/a400ace6a4d6bcfe638f8520f5746ef674e6b0c48a9c121c1ee0c089a6713eeb:200",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/DoomRPG.zip",
      details: {
        author: "jakubuto",
        version: "v.1.1.0",
        size: "1895 KBs",
            }
    },
    {
      name: "Doom II RPG",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AvwLO_I-qGuuZ8Ue4p_RgfY9OI7JwUyhLQ&s",
      category: "datafile",
      link: "https://www.mediafire.com/folder/smyb6tqeyheu8/Doom_II_RPG",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "48 MBs",
            }
    },
    {
      name: "Doom 64EX",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UnE8kJILj547Sk1HTg1Z1gHaGq&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Doom64EX%20%28Steam%20Version%29.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0.1",
        size: "10.8 MBs",
            }
    },
    {
      name: "Nazi Zombies Portable",
      image: "https://pbs.twimg.com/profile_images/1463612941987635200/mJBVkohQ_400x400.jpg",
      category: "datafile",
      link: "https://github.com/nzp-team/nzportable/releases/download/nightly/nzportable-vita.zip",
      details: {
        author: "NZ:P Team",
        version: "v.2.0.0",
        size: "47.3 MBs",
            }
    },
    {
      name: "Duke Nukem 3D",
      image:
        "https://pdacdn.com/app/59522abf33396/duke-nukem-3d.png",
      category: "datafile",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Duke%20Nukem%203D.7z",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "172 MBs",
            }
    },
    {
      name: "Geometry Dash",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_of_Geometry_Dash.svg/800px-Logo_of_Geometry_Dash.svg.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/x74x5a97qflan7m/GD-v1.01.zip/file",
      details: {
        author: "hatoving",
        version: "v.1.02",
        size: "225.86 MBs",
            }
    },
    {
      name: "Anomaly Korea",
      image:
        "https://pdacdn.com/app/59522ae51b641/anomaly-korea.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Anomaly%20Korea.7z",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2",
        size: "290 MBs",
            }
    },
    {
      name: "Anomaly Defenders",
      image:
        "https://pdacdn.com/app/59522b92dd426/anomaly-defenders.png",
      category: "datafile",
      link: "https://www.mediafire.com/folder/eifmnno14yflv/Anomaly_Defenders",
      details: {
        author: "Rinnegatamante",
        version: "v.1.1",
        size: "827 MBs",
            }
    },
    {
      name: "Anomaly Warzone Earth",
      image:
        "https://cdn.mobygames.com/d5bb1cec-abf2-11ed-b206-02420a000131.webp",
      category: "datafile",
      link: "https://www.mediafire.com/folder/q2tl7dhtm8a52/Anomaly_Warzone_Earth",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2",
        size: "153 MBs",
            }
    },
    {
      name: "Anomaly 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqlJSnuFKaXkP75roOYDqjxCt8QULlrTwKQ&s",
      category: "datafile",
      link: "https://www.mediafire.com/folder/x0bq1lau6kbsg/Anomaly_2",
      details: {
        author: "Rinnegatamante",
        version: "v.1.2",
        size: "1 GB",
            }
    },
    {
      name: "Quake",
      image:
        "https://pdacdn.com/app/5ec1af4db739e/quake-i-logo.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.4.1",
        size: "21.4 MBs",
            }
    },
    {
      name: "Quake 2",
      image:
        "https://pdacdn.com/app/5ec2a8076185b/quake-ii-logo.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake2.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.2.4",
        size: "263 GB",
            }
    },
    {
      name: "Quake 3 Arena + Quake Team Arena",
      image:
        "https://dl.apkawards.com/moda/dl29/games/Quake_III/img/Quake_III.png",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake%203.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.3",
        size: "1.3 GB",
            }
    },
    {
      name: "Let's Golf 2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Let%27s_Golf_2_Cover.jpg",
      category: "datafile",
      link: "https://www.mediafire.com/file/g9m8us89k5tn4f4/letsgolf2.7z/file",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "93.36 MBs",
            }
    },
    {
      name: "Super Mario World",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.VUi0UwdFc5W6koHYpfT1WAHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://www.mediafire.com/file/90r5gzd8jylrpkh/SMW.zip",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "1.4 MBs",
            }
    },
    {
      name: "uMario",
      image:
        "https://assets.apk.live/group.werdoes.app.nes20131432556--37-icon.png",
      category: "datafile",
      link: "https://github.com/WeegeeDEVELOPER/uMario-PSVita-Port/releases/download/1.2.7/uMario.vpk",
      details: {
        author: "WegeeDEVELOPER",
        version: "v.1.2.7",
        size: "17.9 MBs",
            }
    },
    {
      name: "uMario",
      image:
        "https://assets.apk.live/group.werdoes.app.nes20131432556--37-icon.png",
      category: "datafile",
      link: "https://github.com/hammerill/uMario_Vita/releases/download/1.00/uMario.vpk",
      details: {
        author: "hammerill",
        version: "v.1.00",
        size: "24.4 MBs",
            }
    },
    {
      name: "Dungeons and Degenerate Gamblers",
      image:
        "https://apkvision.org/wp-content/uploads/2024/08/31291031-1.png",
      category: "datafile",
      link: "https://pixeldrain.com/u/K5exdgSd",
      details: {
        author: "pvzcheatoos",
        version: "v.1.00",
        size: "27.8 MBs",
            }
    },
    {
      name: "Real Football 2011",
      image:
        "https://archive.org/download/real-football-2011_202301/mzi.thpudjug.png",
      category: "datafile",
      link: "https://www.mediafire.com/file/tleqenm0oqj7bbf/realfootball.7z/file",
      details: {
        author: "Rinnegatamante",
        version: "v.1.0",
        size: "192.25 MBs",
            }
    },
    {
      name: "Sonic Mania",
      image:
        "https://www.tierragamer.com/wp-content/uploads/2018/01/SonicManiaOST.jpg",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic%20Mania.7z",
      details: {
        author: "SonicMastr",
        version: "v.1.1",
        size: "193 MBs",
            }
    },
    {
      name: "Sonic 1",
      image:
        "https://image.winudf.com/v2/image1/Y29tLnNlZ2Euc29uaWMxcHhfaWNvbl8xNjU0NDkwODA3XzA4NQ/icon.webp?w=140&fakeurl=1&type=.webp",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic1.zip",
      details: {
        author: "SonicMastr",
        version: "v.1.1.0",
        size: "33.4 MBs",
            }
    },
    {
      name: "Sonic 2",
      image:
        "https://play-lh.googleusercontent.com/_osEK-4f1M2v_XdutbH3Mc4655GV2HJJ0q3uI62uSwv0TVDgIo5yXawRo_InTUifq0Q",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic2.zip",
      details: {
        author: "SonicMastr",
        version: "v.1.1.0",
        size: "39.8 MBs",
            }
    },
    {
      name: "Sonic 3 A.I.R",
      image: "https://sonic-fangames.com/wp-content/uploads/2024/08/sonic-air-3.webp",
      category: "datafile",
      link: "https://www.mediafire.com/file_premium/fxod0clmxnunli8/Sonic_3_A.I.R._PS_VITA_PORT_%255BData_Files_%2526_VPK_Included%255D.zip/file",
      details: {
        author: "gl33ntwine",
        version: "beta-2",
        size: "134.89 MBs",
            }
    },
    {
      name: "Sonic S.M.S 3",
      image: "https://sonic-fangames.com/wp-content/uploads/2024/04/Sonic-3-SMS_Fangame.webp",
      category: "datafile",
      link: "https://www.mediafire.com/file/5og3nljnau8dah6/Sonic_3_SMS.vpk/file",
      details: {
        author: "STLcardsWS",
        version: "v1.0",
        size: "16.8 MBs",
            }
    },
    {
      name: "Sonic CD",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.W0M0trBgBYrQ-ARz9RrtBAHaHa&pid=Api&P=0&h=220",
      category: "datafile",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/SonicCD.zip",
      details: {
        author: "SonicMastr",
        version: "alpha-0.2",
        size: "82.2 MBs",
            }
    },
    {
      name: "Kindergarten 1",
      image: "https://pdacdn.com/app/63c2477ae2eaa/27290908.png",
      category: "datafile",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Kindergarten%201.vpk",
      details: {
        author: "PatnosD",
        version: "v1.0",
        size: "34.1 MBs",
            }
    },
    {
      name: "Kindergarten 2",
      image:
        "https://www.vita.unaux.com/img/kg2.webp",
      category: "datafile",
      link: "https://drive.google.com/drive/folders/1Q8CbRvgFErs7ad7VdQDlaHFS3e-Qyppl?usp=sharing",
      details: {
        author: "PatnosD",
        version: "v1.0",
        size: "16.8 MBs",
            }
    },
      {
      name: "Minecraft Enhanced",
      image:
        "https://www.vita.unaux.com/img/mce.webp",
      link: "https://mega.nz/folder/eR0DlDiB#TOeKW_YrHnMvxGeqXUcryg",
      category: "mod",
        details: {
        author: "PG Team",
        version: "v1.0",
        size: "2.19 GBs",
            }
    },
    {
      name: "Grand Theft Auto III 10th Anniversary Edition (RE Mod)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGV0eTp6kUs1r7_HkcE7y4VbHl5Nh8eW2wvQ&s",
      link: "https://drive.google.com/file/d/1i-YMInM1jUHOW6yaRT-0SzOxMBnZqZ0d/view?usp=sharing",
      category: "mod",
        details: {
        author: "PG Team",
        version: "v1.2",
        size: "1 GB",
            }
    },
    {
      name: "Grand Theft Auto VC 10th Anniversary Edition (RE Mod)",
      image:
        "https://www.rockstarmag.fr/wp-content/uploads/2018/01/Grand-Theft-Auto-Vice-City-10th-Anniversary.png",
      link: "https://drive.google.com/file/d/1M8wAYjxortJwB8WPabtg3vvkYa06fyWD/view?usp=sharing",
      category: "mod",
        details: {
        author: "PG Team",
        version: "v1.0",
        size: "165 MBs",
            }
    },
    {
      name: "Grand Theft Auto SA PC Anniversary Edition (RE Mod)",
      image:
        "https://image.winudf.com/v2/image1/Y29tLnJvY2tzdGFyZ2FtZXMuZ3Rhc2FfaWNvbl8xNTU1Mzk0MjQ4XzAxOA/icon.png?w=184&fakeurl=1",
      link: "https://drive.google.com/file/d/1K-79acCShXwd1VI3g4IZEAqEl-DUjLp_/view?usp=sharing",
      category: "mod",
        details: {
        author: "PG Team",
        version: "v1.0",
        size: "881 MBs",
            }
    },
    {
      name: "Max Payne PC Anniversary Edition",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5f/e4/1e/5fe41e51-3d3b-d396-cb4a-923322bfe4b4/source/512x512bb.jpg",
      link: "https://drive.google.com/file/d/1jxv48hw-ImIbZv6aHhcPjoFSpoJmrNZb/view?usp=sharing",
      category: "mod",
        details: {
        author: "PG Team",
        version: "v1.1",
        size: "12.6 MBs",
            }
    },
    {
      name: "Minecraft Updated: 1st file",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMaFMtCe0cyygKC6CCo5voIOgStocQBPSzQ&s",
      link: "https://www.mediafire.com/file/5s1jf3qrliycttx/Minecraft_Updated_RePatch.zip/file",
      category: "mod",
      details: {
        author: "LOY091",
        version: "v1.1",
        size: "65.22 MBs",
            }
    },
    {
      name: "Minecraft Updated: 2nd file",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMaFMtCe0cyygKC6CCo5voIOgStocQBPSzQ&s",
      link: "https://www.mediafire.com/file/lqcgwqg1dsbvd2z/mcu_1.1.zip/file",
      category: "mod",
      details: {
        author: "LOY091",
        version: "v1.1",
        size: "1015.3 MBs",
            }
    },
    {
      name: "Borderlands 2 Patch",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.y-_O8XY42vAJxufgVxf5JwHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/_Special%20Install_/Borderlands%202%20Patch.7z",
      category: "mod",
      footer: "Notes: Use VitaGrafix to set the Framebuffer to: 640x368,update the game to the latest patch v1.09,and overclock your Vita's CPU to 500 MHz,GPU to 222 MHz,& XBAR to 166 MHz,use this mod with the game's thread optimizer profile for maximum efficiency to reduce the game's infamous lag"
    },
    {
      name: "Borderlands 2 Thread Optimizer Profile",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.y-_O8XY42vAJxufgVxf5JwHaHa&pid=Api&P=0&h=220",
      link: "https://drive.google.com/file/d/1uBtGawSbVrmIg4sNicmcAxgSXt1U7eKp/view",
      category: "mod",
      footer: "Notes: Paste the config.dat in ux0/data/ThreadOptimizer/<titleid>"
    },
    {
      name: "Need For Speed: Most Wanted Upgrades",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.q_LYK8LK1fyMx8SWhzyDZwHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/_Special%20Install_/Need%20for%20Speed%20Most%20Wanted%20Upgrades.7z",
      category: "mod",
      footer: "This modpack includes NFS MW Redux,& a car pack that adds bonus and multiplayer cars"
    },
    {
      name: "Dirty Fantasy (NSFW)",
      image:
        "https://image.gamespot.com.cn/upload/202411/19/47107ulkxp2mHdr.png",
      category: "nsfw",
      link: "https://www.mediafire.com/folder/j2t5pur6nz6jp/Dirty+Fantasy",
    },
    {
      name: "Pirate Trainer (NSFW)",
      image:
        "https://img.40407.com/upload/202407/21/6bae12NETebL1FS.png",
      category: "nsfw",
      link: "https://www.mediafire.com/file/sribf1xm9rss22i/Pirate_Trainer-01.00.vpk/file",
    },
    {
      name: "A New Dawn (NSFW)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdhoopEVODH8UPk67jLXyNgUMeUP3hQBGCw&s",
      category: "nsfw",
      link: "https://www.mediafire.com/file/4udpzvcqxw86x7k/A_New_Dawn-01.00.vpk/file",
    },
    {
      name: "Aurelia (NSFW)",
      image:
        "https://ugc.production.linktr.ee/9fa7e582-b9b3-4b0e-8dc5-2ab785ac43b7_WX20241223-204342-2x.png",
      category: "nsfw",
      link: "https://github.com/NFSHubster/Aurelia-PS-Vita/releases/download/V2.0/Aurelia.vpk",
    },
    {
      name: "SiNiSistar (NSFW)",
      image:
        "https://source.boomplaymusic.com/group10/M00/12/30/dda69925c70c411eb3cb300471abd9e5H512W512_320_320.jpg",
      category: "nsfw",
      link: "https://www.mediafire.com/file/axsoccatqv63rbr/SiNiSistar_Alpha_v0.5.vpk/file",
    },
    {
      name: "Sakura Hime (NSFW)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXYWECJVvco-wdqKVOwDh9MJGhWDyJTt58g&s",
      category: "nsfw",
      link: "https://www.mediafire.com/file/n3n6s2xwd237qk7/Sakura_Hime_Beta_v0.8.vpk/file",
    },
  ];

const gameList = document.getElementById("gameList");

function renderGames() {
  gameList.innerHTML = "";
  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
      card.classList.add(game.category || "datafile");

    const content = document.createElement("div");
    content.classList.add("game-content");

    const img = document.createElement("img");
    img.src = game.image;

    const label = document.createElement("label");
    label.textContent = game.name;

    content.appendChild(img);
    content.appendChild(label);

    const footer = document.createElement("div");
    footer.classList.add("game-footer");

    const button = document.createElement("button");
    button.textContent = "Download";
    button.onclick = () => (window.location.href = game.link);
    footer.appendChild(button);

    
    if (game.footer) {
      const description = document.createElement("p");
      description.classList.add("game-description");
      description.textContent = game.footer;
      footer.appendChild(description);
    }

    
    if (game.details) {
      const detailsContainer = document.createElement("div");
      detailsContainer.classList.add("game-details");

      for (const [key, value] of Object.entries(game.details)) {
        const line = document.createElement("p");
        line.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
        detailsContainer.appendChild(line);
      }

      footer.appendChild(detailsContainer);
    }

    card.appendChild(content);
    card.appendChild(footer);
    gameList.appendChild(card);
  });
}


  renderGames();

 function searchGames() {
    const searchInput = document.getElementById("searchGames").value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card) => {
      const label = card.querySelector("label").textContent.toLowerCase();
      const matchesSearch = label.includes(searchInput);
      const matchesCategory = (activeCategory === "all") || card.classList.contains(activeCategory);

      if (matchesSearch && matchesCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  document.getElementById("searchGames").addEventListener("input", searchGames);

  function filterCategory(category) {
    activeCategory = category;
    searchGames();

    const drawer = document.querySelector('sl-drawer');
    if (drawer && drawer.open) {
      drawer.hide();
    }
  }
  window.filterCategory = filterCategory;

});
