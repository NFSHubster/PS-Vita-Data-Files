document.addEventListener("DOMContentLoaded", function () {
  const games = [
    {
      name: "Grand Theft Auto III",
      image:
        "https://play-lh.googleusercontent.com/3gzidHrtPm8yGZfItWHEIYclWTjcOhd4KMf40Igcv3mOW_KD7T_4oh5A_pMb1E5NOrA",
      link: "https://www.mediafire.com/file/nfcc6u938mxnmgs/gta3.zip/file",
    },
    {
      name: "Grand Theft Auto Vice City",
      image:
        "https://rexdl.com/wp-content/uploads/2017/08/grand-theft-auto-vice-city-android-thumb.jpg",
      link: "https://www.mediafire.com/file/cpnu899gis7hzzq/gtavc.zip/file",
    },
    {
      name: "Grand Theft Auto San Andreas",
      image:
        "https://play-lh.googleusercontent.com/XRlCpj22PFJuFK43QcE3u5RxmoNUed7YO_zG-6F1PCqjrBIIURbTBDvTgLVVIk5pNeY",
      link: "https://www.mediafire.com/file/nl15z2mhs4lg947/gtasa.zip/file",
    },
    {
      name: "Grand Theft Auto Chinatown Wars",
      image:
        "https://play-lh.googleusercontent.com/cNE2roM5cV3F2VFABVGVIzjmfanWzMiTiOzIQCtKR9X1EFIHowqhav5wM2_ZmnZAoLY",
      link: "https://www.mediafire.com/file/z1h025ydqjekoc2/gtactw.zip/file",
    },
    {
      name: "Max Payne",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5f/e4/1e/5fe41e51-3d3b-d396-cb4a-923322bfe4b4/source/512x512bb.jpg",
      link: "https://www.mediafire.com/file/zed8eoxhab149g6/maxpayne.zip/file",
    },
    {
      name: "Bully",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.qZl_15lW2n0hv2THdD3czAHaHa&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/zqfbomec81ixu69/Bully.zip/file",
    },
    {
      name: "Hollow Knight",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.yksrDyeoiGInEdKYFyreeQHaHa&pid=Api&P=0&h=220",
      link: "https://drive.google.com/file/d/1a_sRARvwmFn3da-TPp4hxY78hhNkkSW9/view?usp=sharing",
    },
    {
      name: "Cuphead",
      image:
        "https://image.api.playstation.com/vulcan/img/cfn/11307fllh6D-IvbpCa18N0vRggVeRYWA06paTNCj3DENJMScAzW2f3ry4IwFcXBAt9kWXdZGpGoOGjxJ_e9MdordMVAosNhZ.png",
      link: "https://drive.google.com/file/d/1rbqc04E4IZXZD3RtTR5cIxkKsohHM4AQ/view?usp=sharing",
    },
    {
      name: "Balatro",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202401/2218/d8c5d5861249cd80a300efb723450f56d0347e4345e2eb80.png",
      link: "https://www.mediafire.com/file/o5f7z5l2m8o8b97/Balatro_V0.11.vpk/file",
    },
    {
      name: "devilutionX/Diablo 1",
      image:
        "https://play-lh.googleusercontent.com/TkJVdT7FvFf16WmqxKp9XfJ7Pjy0a0GhVo3gXYk6OeTn7d59SF4K0Fst2cAf2xAyIA",
      link: "https://www.mediafire.com/folder/2tc0z0a56a0ye/diasurgical",
    },
    {
      name: "Blasphemous",
      image:
        "https://images.nintendolife.com/2de5ec267262e/blasphemous-cover.cover_large.jpg",
      link: "https://www.mediafire.com/file/1958318axcnco2k/Blasphemous_Vita_Port.7z/file",
    },
    {
      name: "This War of Mine",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.qwjzy02CT3wIUYfS7aeuzAHaHa&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/ossr9giltvaasjl/This_War_of_Mine.rar/file",
    },
    {
      name: "Fahrenheit: Indigo Prophecy",
      image:
        "https://pdacdn.com/app/59522c32d4d57/fahrenheit-indigo-prophecy.png",
      link: "https://www.mediafire.com/file/018vreisks2ulim/fahrenheit_v0.8.ZIP/file",
    },
    {
      name: "xash3d/Half-Life & Counter Strike",
      image:
        "https://image.winudf.com/v2/image/aW4uY2VsZXN0Lnhhc2gzZC5obF9pY29uXzE1MzE2MDU4OTlfMDQ5/icon.png?w=184&fakeurl=1",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Half%20Life%20%2B%20Counter%20Strike%20%28xash3d%29.zip",
    },
    {
      name: "Dead Space Mobile",
      image:
        "https://assets-prd.ignimgs.com/2023/01/14/deadspacem-1673686414670.jpg",
      link: "https://drive.google.com/file/d/1AGOIwAghBotGb7fyeVfVHC8sqOUG0Wss/view?usp=sharing",
    },
    {
      name: "Battlefield Bad Company 2",
      image:
        "https://assets-prd.ignimgs.com/2022/01/04/battlefield-bad-company-2-button-crop-1641279153499.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Battlefield%3A%20Bad%20Company%202.zip",
    },
    {
      name: "Need for Speed: Hot Pursuit",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ZK13PerQ7J_thdmhwZ-aWgHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/NFS%20Hot%20Pursuit.zip",
    },
    {
      name: "Mass Effect Infiltrator",
      image: "https://tse2.mm.bing.net/th?id=OIP.BfzLpV9lQUWcFukrHFd8wQHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/masseffect.zip",
    },
    {
      name: "Simpsons Hit & Run",
      image:
        "https://gbatemp.net/attachments/the-simpsons-hit-run-01ad26d9bb584000-jpg.400032/",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Simpsons%20Hit%20%26%20Run%20%28Original%20Cutscenes%29.7z",
    },
    {
      name: "Deltarune",
      image:
        "https://image.winudf.com/v2/image1/ZGVsdC5ldXMuYXJ1bl9pY29uXzE1NDM5MDk5MzlfMDMz/icon.png?w=184&fakeurl=1",
      link: "https://www.mediafire.com/file/jy1okv1cihkf26q/Deltarune-PSVita.vpk/file",
    },
    {
      name: "LEGO Star Wars: The Complete Saga",
      image:
        "https://play-lh.googleusercontent.com/4X41U-wqnwWpnYBfWmeHsAOkLNvLpWJ4BXeZn0wqu2XzBpLNLvkvOPnBqAnMUOygOQ",
      link: "https://www.mediafire.com/file/2qhxrbu0k14jk4o/lswtcs.zip/file",
    },
    {
      name: "Portal",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.eoD86qAF9q8meopfwBJYGQHaHa&pid=Api&P=0&h=220",
      link: "https://mega.nz/file/tRMy1DJI#LU-PwN0-BDkNTu01gJgVRXdWGjOzwYRwh4gNyE7wZK4",
    },
    {
      name: "Streets of Rage Remake",
      image:
        "https://img.utdstc.com/icon/92a/839/92a839b477f5e13424e906a9267a136ef2f9dce04c11f1a9acd7bfa1291baa49:200",
      link: "https://www.mediafire.com/folder/eu9tlr8fe640b/Streets_of_Rage_Remake",
    },
    {
      name: "Shadow Warrior",
      image:
        "https://play-lh.googleusercontent.com/iBFtK_5TrtXRVU9ESK73dmfcc2K9wByrDYfrdCo1rL5H_-fbfNSld-a7ZwtTNBOg1mE",
      link: "https://www.mediafire.com/folder/2ph3mijz0bng1/Shadow_Warrior",
    },
    {
      name: "Final Fantasy Dimensions",
      image:
        "https://assets-prd.ignimgs.com/2022/05/23/ffdimensions-1653332120734.jpg?width=300&crop=1:1%2Csmart",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Fina%20Fantasy%20Dimensions.zip",
    },
    {
      name: "Final Fantasy 3",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202301/1210/7SjuZOeJFmJutHbNviOsfhHa.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%203%20%28ff3%29.zip",
    },
    {
      name: "Final Fantasy 4",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.BQ-saEVLM4FxubmbkEkHVwHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%204%20%28ff4%29.zip",
    },
    {
      name: "Final Fantasy 4 The After Years",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.iAzlMiMXLdHus_aP5ERY5QHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%20After%20Years%28ff4a%29.zip",
    },
    {
      name: "Final Fantasy 5",
      image: "https://gamefaqs.gamespot.com/a/box/7/8/8/929788_front.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%205%20%28ff5%29.zip",
    },
    {
      name: "Modern Combat 3: Fallen Nation",
      image:
        "https://img.tapimg.net/market/images/34d23754f87ccac5cff8e5f28c678ba8.png",
      link: "https://www.mediafire.com/folder/s3t22w98hlrxm/Modern_Combat_3",
    },
    {
      name: "Fallout 1",
      image:
        "https://assets-prd.ignimgs.com/2022/01/27/fallout-1-button-edit-1643322142537.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/fallout.7z",
    },
    {
      name: "Fallout 2",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.da52RgYN84U8Vclwfp6pXgHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/fallout2.zip",
    },
    {
      name: "Tom Clancy's Splinter Cell: Conviction",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.xLFkavflwT49Gmc5tZesewHaHa&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/mn5cm5cac7l9cz2/splintercell.7z/file",
    },
    {
      name: "Crazy Taxi",
      image:
        "https://app.famitsu.com/wp-content/uploads/2013/07/CRAZYTAXI_icon.jpg",
      link: "https://www.mediafire.com/file/z58698zfgbbqt06/crazy_taxi_classic.zip/file",
    },
    {
      name: "Subway Surfers",
      image:
        "https://play-lh.googleusercontent.com/bBF-xD47BOb3nfbbXF-Isx8LdZHX_Uxz6h14ughVjhCVDzdWU2NeJzJIv1wW4F1q7Rw",
      link: "https://www.mediafire.com/file/7cgatjzd61dtyrf/SubwaySurfers.vpk/file",
    },
    {
      name: "Unsighted",
      image:
        "https://images.nintendolife.com/b70f39ee9780c/unsighted-cover.cover_300x.jpg",
      link: "https://drive.google.com/file/d/1iSAoCEorNS-gWzyX1T7QVEYZe51szsrp/view?usp=sharing",
    },
    {
      name: "Command & Conquer: Red Alert",
      image:
        "https://m.media-amazon.com/images/I/711BwJ0-iUL._SL1500_.jpg",
      link: "https://www.mediafire.com/folder/cc9u81vik1lgj/Command_and_Conquer_Red_Alert",
    },
    {
      name: "Command & Conquer: Tiberian Dawn",
      image:
        "https://static.wikia.nocookie.net/cnc_gamepedia_en/images/7/7a/Cnctd-win-cover.jpg/revision/latest?cb=20180801164234",
      link: "https://www.mediafire.com/folder/r9r54qoqq4b8d/Command_and_Conquer_Tiberian_Dawn",
    },
    {
      name: "Zelda 3: A Link to the Past",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.iyXfCHXe45Y5MD24BM4yxgHaHa&pid=Api&P=0&h=220",
      link: "https://drive.google.com/file/d/1PJAKw_qIrWdo52eWjfVdxedS0aMnNtNd/view",
    },
    {
      name: "Super Mario 64",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.BvriPJra1wbseYngRo0dpwHaHa&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/4xe47qz7i8fw165/sm64.us.60fps.vpk/file",
    },
    {
      name: "Ultimate Spiderman: Total Mayhem",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Purple1/v4/7d/87/4a/7d874af2-b30a-ec51-fac8-b5ed01637a88/source/512x512bb.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Ultimate%20Spider-Man%3A%20Total%20Mayhem.zip",
    },
    {
      name: "Tomb Raider 1 & 2 Classic",
      image: "https://archive.org/download/tomb-raider-i/m_tomb-raider-i.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Tomb%20Raider%201%20and%202%20Classic%20v1.0.2.zip",
    },
    {
      name: "Spelunky Classic HD",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.eOLMS4QUJMZ6VC1eTt1ZigHaHa&pid=Api&P=0&h=220",
      link: "https://github.com/SiulPop/Spelunky.Classic.HD.VITA./releases/download/speunky.vita/Spelunky-Classic.VPK",
    },
    {
      name: "Soul Calibur",
      image:
        "https://image.gameapps.hk/images/201309/07/AAA.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Soulcalibur.zip",
    },
    {
      name: "AM2R",
      image:
        "https://pdacdn.com/app/5b60019560ddd/1401-profile-am2r-another-metroid-2-remake.png",
      link: "https://drive.google.com/file/d/1uLrBPL4MDjNAYxmXjdQk1cV2aYBj7ies/view?pli=1",
    },
    {
      name: "Jump King",
      image:
        "https://img.utdstc.com/icon/df6/fa4/df6fa459eb88a7231cbdd89ce9a0066ed860f244a0150e87d1910d395cf63165:200",
      link: "https://github.com/Rocroverss/JumpKingGodot/releases/download/v1.01/JumpKing.vpk",
    },
    {
      name: "OttoMatic",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.LHKfiB4f4qzF7isLr1X9EgHaHZ&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/folder/h36ya3zzwita5/OttoMatic",
    },
    {
      name: "Death Road to Canada",
      image:
        "https://play-lh.googleusercontent.com/rpC70ha-hZM85OroGMRlh4q5ff2oEpJWd2-Uqu5oGAdVgVMPG3aPbV4cvaN0G77wQg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Death%20Road%20to%20Canada.7z",
    },
    {
      name: "Mighty Mike",
      image:
        "https://img.itch.zone/aW1nLzkxNzE4NTcuanBn/original/NZZtBG.jpg",
      link: "https://www.mediafire.com/folder/k8f5iesjwzuum/Mighty_Mike",
    },
    {
      name: "The World Ends With You",
      image:
        "https://pdacdn.com/app/59522b75a52db/the-world-ends-with-you.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/The%20World%20Ends%20With%20Youzip",
    },
    {
      name: "Driver 2",
      image:
        "https://assets-prd.ignimgs.com/2022/10/10/driver2-1665446127223.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Driver%202.zip",
    },
    {
      name: "Return To The Castle: Wolfenstein",
      image:
        "https://dl.apkawards.com/moda/dl16/games/rtcw4a/img/rtcw4a.png?v=22",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Return%20to%20Castle%20Wolfenstein.7z",
    },
    {
      name: "Wolfenstein 3D",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.dWQe_npr_8OFF0Q-OWUUFwHaF0&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Wolfenstein%203D.zip",
    },
    {
      name: "Mario Kart Vita",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjDp7EjaC97K6Dxeat_2-c_JTsCR-sgkIcw&s",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Mario%20Kart%20Vita.zip",
    },
    {
      name: "Bugdom",
      image:
        "http://www.mobygames.com/images/covers/l/11020-bugdom-windows-front-cover.jpg",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Bugdom.vpk",
    },
    {
      name: "Doom RPG",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eaOH_WAZo3mnoL6A8TqtzAHaLH&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/DoomRPG.zip",
    },
    {
      name: "Doom 64EX",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UnE8kJILj547Sk1HTg1Z1gHaGq&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Doom64EX%20%28Steam%20Version%29.zip",
    },
    {
      name: "Nazi Zombies Portable",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7xm1.jpg",
      link: "https://github.com/nzp-team/nzportable/releases/download/nightly/nzportable-vita.zip",
    },
    {
      name: "Duke Nukem 3D",
      image:
        "https://pdacdn.com/app/59522abf33396/duke-nukem-3d.png",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Duke%20Nukem%203D.7z",
    },
    {
      name: "Geometry Dash",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_of_Geometry_Dash.svg/800px-Logo_of_Geometry_Dash.svg.png",
      link: "https://www.mediafire.com/file/x74x5a97qflan7m/GD-v1.01.zip/file",
    },
    {
      name: "Quake",
      image:
        "https://pdacdn.com/app/5ec1af4db739e/quake-i-logo.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake.zip",
    },
    {
      name: "Quake 2",
      image:
        "https://pdacdn.com/app/5ec2a8076185b/quake-ii-logo.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake2.zip",
    },
    {
      name: "Quake 3 Arena",
      image:
        "https://dl.apkawards.com/moda/dl29/games/Quake_III/img/Quake_III.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake%203.zip",
    },
    {
      name: "Let's Golf 2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Let%27s_Golf_2_Cover.jpg",
      link: "https://www.mediafire.com/file/g9m8us89k5tn4f4/letsgolf2.7z/file",
    },
    {
      name: "Super Mario World",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.VUi0UwdFc5W6koHYpfT1WAHaHa&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/90r5gzd8jylrpkh/SMW.zip",
    },
    {
      name: "Dungeons and Degenerate Gamblers",
      image:
        "https://apkvision.org/wp-content/uploads/2024/08/31291031-1.png",
      link: "https://pixeldrain.com/u/K5exdgSd",
    },
    {
      name: "Real Football 2011",
      image:
        "https://archive.org/download/real-football-2011_202301/mzi.thpudjug.png",
      link: "https://www.mediafire.com/file/tleqenm0oqj7bbf/realfootball.7z/file",
    },
    {
      name: "Sonic Mania",
      image:
        "https://www.tierragamer.com/wp-content/uploads/2018/01/SonicManiaOST.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic%20Mania.7z",
    },
    {
      name: "Sonic 1",
      image:
        "https://image.winudf.com/v2/image1/Y29tLnNlZ2Euc29uaWMxcHhfaWNvbl8xNjU0NDkwODA3XzA4NQ/icon.webp?w=140&fakeurl=1&type=.webp",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic1.zip",
    },
    {
      name: "Sonic 2",
      image:
        "https://play-lh.googleusercontent.com/_osEK-4f1M2v_XdutbH3Mc4655GV2HJJ0q3uI62uSwv0TVDgIo5yXawRo_InTUifq0Q",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Sonic2.zip",
    },
    {
      name: "Sonic 3 A.I.R",
      image: "https://sonic-fangames.com/wp-content/uploads/2024/08/sonic-air-3.webp",
      link: "https://www.mediafire.com/file_premium/fxod0clmxnunli8/Sonic_3_A.I.R._PS_VITA_PORT_%255BData_Files_%2526_VPK_Included%255D.zip/file",
    },
    {
      name: "Sonic 3 S.M.S",
      image: "https://sonic-fangames.com/wp-content/uploads/2024/04/Sonic-3-SMS_Fangame.webp",
      link: "https://www.mediafire.com/file/5og3nljnau8dah6/Sonic_3_SMS.vpk/file",
    },
    {
      name: "Sonic CD",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.W0M0trBgBYrQ-ARz9RrtBAHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/SonicCD.zip",
    },
    {
      name: "Kindergarten 1",
      image: "https://pdacdn.com/app/63c2477ae2eaa/27290908.png",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Kindergarten%201.vpk",
    },
    {
      name: "Kindergarten 2",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/1067850/header.jpg?t=1564463264",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/Kindergarten%202.vpk",
    },
      {
      name: "Minecraft Enhanced",
      image:
        "https://preview.redd.it/release-minecraft-enhanced-by-pg-team-mod-v0-iexzwtxzlapb1.png?width=1080&crop=smart&auto=webp&s=2bc3bd1aac4c8f406e428c7b98f1e4c18304ac9d",
      link: "https://mega.nz/folder/eR0DlDiB#TOeKW_YrHnMvxGeqXUcryg",
    },
    {
      name: "Minecraft Updated: 1st file",
      image:
        "https://preview.redd.it/minecraft-updated-v0-nd2j4nkk1ope1.png?width=960&format=png&auto=webp&s=3f408a729bfcf97755773b32fbd9f29ee599a106",
      link: "https://www.mediafire.com/file/5s1jf3qrliycttx/Minecraft_Updated_RePatch.zip/file",
    },
    {
      name: "Minecraft Updated: 2nd file",
      image:
        "https://preview.redd.it/minecraft-updated-v0-nd2j4nkk1ope1.png?width=960&format=png&auto=webp&s=3f408a729bfcf97755773b32fbd9f29ee599a106",
      link: "https://www.mediafire.com/file/lqcgwqg1dsbvd2z/mcu_1.1.zip/file",
    },
    {
      name: "Borderlands 2 Patch",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.y-_O8XY42vAJxufgVxf5JwHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/_Special%20Install_/Borderlands%202%20Patch.7z",
    },
    {
      name: "Need For Speed: Most Wanted Upgrades",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.q_LYK8LK1fyMx8SWhzyDZwHaHa&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psvita-homebrew-collection-1-14-2024/PSVita/Homebrew/Games/_Special%20Install_/Need%20for%20Speed%20Most%20Wanted%20Upgrades.7z",
    },
    {
      name: "Dirty Fantasy (NSFW)",
      image:
        "https://image.gamespot.com.cn/upload/202411/19/47107ulkxp2mHdr.png",
      link: "https://www.mediafire.com/folder/j2t5pur6nz6jp/Dirty+Fantasy",
    },
    {
      name: "Pirate Trainer (NSFW)",
      image:
        "https://img.40407.com/upload/202407/21/6bae12NETebL1FS.png",
      link: "https://www.mediafire.com/file/sribf1xm9rss22i/Pirate_Trainer-01.00.vpk/file",
    },
    {
      name: "A New Dawn (NSFW)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdhoopEVODH8UPk67jLXyNgUMeUP3hQBGCw&s",
      link: "https://www.mediafire.com/file/4udpzvcqxw86x7k/A_New_Dawn-01.00.vpk/file",
    },
    {
      name: "Aurelia (NSFW)",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.ylkx2w7ncicqkrEh-NwxlwAAAA&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Aurelia%20%28NSFW%29.zip",
    },
    {
      name: "SiNiSistar (NSFW)",
      image:
        "https://source.boomplaymusic.com/group10/M00/12/30/dda69925c70c411eb3cb300471abd9e5H512W512_320_320.jpg",
      link: "https://www.mediafire.com/file/axsoccatqv63rbr/SiNiSistar_Alpha_v0.5.vpk/file",
    },
    {
      name: "Sakura Hime (NSFW)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXYWECJVvco-wdqKVOwDh9MJGhWDyJTt58g&s",
      link: "https://cdn.discordapp.com/attachments/1319890020060102747/1320623985171632280/Sakura_Hime_Beta_v0.8.vpk?ex=67e4e1ee&is=67e3906e&hm=c1fe41854a4fd3410305bdc8e260514b6f19f20dc07f0c366a703fe9ecb04765&",
    },
  ];

  const gameList = document.getElementById("gameList");

  function renderGames() {
    gameList.innerHTML = "";
    games.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("game-card");

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
      card.appendChild(content);
      card.appendChild(footer);
      gameList.appendChild(card);
    });
  }

  renderGames();

  function searchGames() {
    const searchInput = document
      .getElementById("searchGames")
      .value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card) => {
      const label = card.querySelector("label").textContent.toLowerCase();
      if (label.includes(searchInput)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  document.getElementById("searchGames").addEventListener("input", searchGames);

  setInterval(searchGames, 500);
});
