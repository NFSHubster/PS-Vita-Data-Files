document.addEventListener("DOMContentLoaded", function () {
  const games = [
    {
      name: "Grand Theft Auto III",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grand_Theft_Auto_III_logo.svg/640px-Grand_Theft_Auto_III_logo.svg.png",
      link: "https://www.mediafire.com/file/nfcc6u938mxnmgs/gta3.zip/file",
    },
    {
      name: "Grand Theft Auto Vice City",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gta-vice_city-logo.png/640px-Gta-vice_city-logo.png",
      link: "https://www.mediafire.com/file/cpnu899gis7hzzq/gtavc.zip/file",
    },
    {
      name: "Grand Theft Auto San Andreas",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Grand_Theft_Auto_San_Andreas_logo.svg/800px-Grand_Theft_Auto_San_Andreas_logo.svg.png",
      link: "https://www.mediafire.com/file/nl15z2mhs4lg947/gtasa.zip/file",
    },
    {
      name: "Grand Theft Auto Chinatown Wars",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Grand_Theft_Auto_Chinatown_Wars_logo.png/800px-Grand_Theft_Auto_Chinatown_Wars_logo.png",
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
        "https://upload.wikimedia.org/wikipedia/en/6/63/Bully_frontcover.jpg",
      link: "https://www.mediafire.com/file/zqfbomec81ixu69/Bully.zip/file",
    },
    {
      name: "Hollow Knight",
      image:
        "http://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/220px-Hollow_Knight_first_cover_art.webp.png",
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
        "https://clan.fastly.steamstatic.com/images/44208250/7c77ae325131b1f46f2e94ebac8f55c8d1dbaf13.png",
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
        "https://cdn1.epicgames.com/offer/eddb735dde6b47cda8193f2643cff886/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1a83630b91b3f128e8f9dd58f3f8eed",
      link: "https://www.mediafire.com/file/1958318axcnco2k/Blasphemous_Vita_Port.7z/file",
    },
    {
      name: "xash3d/Half-Life & Counter Strike",
      image:
        "https://media.moddb.com/images/articles/1/260/259974/xash_logo_1024x768.jpg",
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
        "https://vignette.wikia.nocookie.net/nfs/images/4/4d/NFSHP2010_Boxart.jpg/revision/latest?cb=20180228233822&path-prefix=en",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/NFS%20Hot%20Pursuit.zip",
    },
    {
      name: "Mass Effect",
      image:
        "https://i.ytimg.com/vi/ihymbMpddQU/maxresdefault.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/masseffect.zip",
    },
    {
      name: "Simpsons Hit & Run",
      image:
        "https://gametrex.com/wp-content/uploads/2019/03/The-Simpsons-Hit-Run-Free-Download.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Simpsons%20Hit%20%26%20Run%20%28Original%20Cutscenes%29.7z",
    },
    {
      name: "Aurelia (NSFW)",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.ylkx2w7ncicqkrEh-NwxlwAAAA&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Aurelia%20%28NSFW%29.zip",
    },
    {
      name: "Final Fantasy Dimensions",
      image:
        "https://i.ytimg.com/vi/fNL9Hyik0mY/maxresdefault.jpg",
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
      name: "Final Fantasy 5",
      image:
        "https://gamefaqs.gamespot.com/a/box/7/8/8/929788_front.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%205%20%28ff5%29.zip",
    },
    {
      name: "Final Fantasy 4 The After Years",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.tCG0BHRvj65Z96Q_FgZx8gHaFP&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Final%20Fantasy%20After%20Years%28ff4a%29.zip",
    },
    {
      name: "Fallout 1",
      image:
        "https://www.bowlerssupply.com/wp-content/uploads/2024/04/No_image_available.svg.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/fallout.7z",
    },
    {
      name: "Fallout 2",
      image:
        "https://www.bowlerssupply.com/wp-content/uploads/2024/04/No_image_available.svg.png",
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
      link: "https://archive.org/download/crazy-taxi-game-for-ps-vita-non-pdrm/Crazy%20Taxi%20%28Game%20for%20PS%20Vita%29%20%28NonPdrm%29.rar",
    },
    {
      name: "Unsighted",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.PKBFPgr3WC2AIQszBTOPRQHaEK&pid=Api&P=0&h=220",
      link: "https://drive.google.com/file/d/1iSAoCEorNS-gWzyX1T7QVEYZe51szsrp/view?usp=sharing",
    },
    {
      name: "Zelda 3: A Link to the Past",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.npDfa7tiKQhZk4oQYkS9jQHaDt&pid=Api&P=0&h=220",
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
      image:
        "https://www.bowlerssupply.com/wp-content/uploads/2024/04/No_image_available.svg.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Tomb%20Raider%201%20and%202%20Classic%20v1.0.2.zip",
    },
    {
      name: "Spelunky Classic HD",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.9A4Bdw6OQk3NoFPAVgXOvAHaEK&pid=Api&P=0&h=220",
      link: "https://github.com/SiulPop/Spelunky.Classic.HD.VITA./releases/download/speunky.vita/Spelunky-Classic.VPK",
    },
    {
      name: "Soul Calibur",
      image:
        "https://tse3.mm.bing.net/th?id=OIP._7mfXaj49MEgmROnFbUBqQHaEK&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Soulcalibur.zip",
    },
    {
      name: "AM2R",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWQ4Yzk0NjEtOGMxYy00NmRkLTg1ODYtYWE4NDI2Zjk2M2ZkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
      link: "https://drive.google.com/file/d/1uLrBPL4MDjNAYxmXjdQk1cV2aYBj7ies/view",
    },
    {
      name: "Jump King",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1061090/capsule_616x353.jpg?t=1688636948",
      link: "https://github.com/Rocroverss/JumpKingGodot/releases/download/v1.01/JumpKing.vpk",
    },
    {
      name: "The World Ends With You",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.h2kHcNK_2Z7ljkNiwe2YEQHaEK&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/The%20World%20Ends%20With%20Youzip",
    },
    {
      name: "Driver 2",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.OXyJh4K94zcBacEbeZu1OgHaLH&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Driver%202.zip",
    },
    {
      name: "Wolfenstein 3D",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.dWQe_npr_8OFF0Q-OWUUFwHaF0&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Wolfenstein%203D.zip",
    },
    {
      name: "Doom RPG",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eaOH_WAZo3mnoL6A8TqtzAHaLH&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/DoomRPG.zip",
    },
    {
      name: "Mario Kart Vita",
      image:
        "https://i.ytimg.com/vi/S26g76PYVzk/maxresdefault.jpg",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Mario%20Kart%20Vita.zip",
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
      name: "Doom 64EX",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UnE8kJILj547Sk1HTg1Z1gHaGq&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Doom64EX%20%28Steam%20Version%29.zip",
    },
    {
      name: "Nazi Zombies Portable",
      image:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co7xm1.jpg",
      link: "https://github.com/nzp-team/nzportable/releases/download/nightly/nzportable-vita.zip",
    },
    {
      name: "Geometry Dash",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.a8d4S89rLaFnTwU2Ue2_cAHaEK&pid=Api&P=0&h=220",
      link: "https://www.mediafire.com/file/x74x5a97qflan7m/GD-v1.01.zip/file",
    },
    {
      name: "Quake",
      image:
        "https://www.bowlerssupply.com/wp-content/uploads/2024/04/No_image_available.svg.png",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake.zip",
    },
    {
      name: "Quake 2",
      image:
        "https://cdn1.epicgames.com/offer/a5434b28a3ac403e966478e86a839f5b/EGS_QuakeII_idSoftware_S2_1200x1600-6123414858c2f24e8f760ba637155c8c",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake2.zip",
    },
    {
      name: "Quake 3",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.fexGazLvocm3sLVgsbfVawHaLH&pid=Api&P=0&h=220",
      link: "https://archive.org/download/psv-homebrew/Data%20Files/Quake%203.zip",
    },
    {
      name: "Let's Golf 2",
      image:
        "https://www.giantbomb.com/a/uploads/original/10/103881/2417712-let_s_golf__2_main.jpg",
      link: "https://www.mediafire.com/file/g9m8us89k5tn4f4/letsgolf2.7z/file",
    },
    {
      name: "Real Football 2011",
      image:
        "https://cdn.mobygames.com/screenshots/16360155-real-soccer-2011-j2me-title-screen.png",
      link: "https://www.mediafire.com/file/tleqenm0oqj7bbf/realfootball.7z/file",
    },
  ];

  const gameList = document.getElementById("gameList");

  function renderGames() {
    gameList.innerHTML = "";
    games.forEach((game) => {
      const card = document.createElement("sl-card");
      card.className = "card-overview";
      card.style.margin = "10px";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.justifyContent = "space-between";
      card.style.height = "auto";
      card.style.textAlign = "center";

      const img = document.createElement("img");
      img.slot = "image";
      img.src = game.image;
      img.style.width = "200px";
      img.style.height = "200px";
      img.style.objectFit = "cover";

      const label = document.createElement("label");
      label.textContent = game.name;
      label.style.flexGrow = "1";
      label.style.display = "block";
      label.style.wordBreak = "break-word";
      label.style.overflowWrap = "break-word";
      label.style.width = "150px";
      label.style.height = "60px";
      label.style.padding = "0px";
      label.style.fontWeight = "600";

      const footer = document.createElement("div");
      footer.slot = "footer";
      footer.style.display = "flex";
      footer.style.justifyContent = "center";
      footer.style.alignItems = "center";
      footer.style.height = "20px";

      const button = document.createElement("sl-button");
      button.textContent = "Download";
      button.variant = "primary";
      button.outline = true;
      button.size = "small";
      button.onclick = () => (window.location.href = game.link);

      footer.appendChild(button);
      card.appendChild(img);
      card.appendChild(label);
      card.appendChild(footer);
      gameList.appendChild(card);
    });
  }

  renderGames();

  function searchGames() {
    const searchInput = document
      .getElementById("searchGames")
      .value.toLowerCase();
    const cards = document.querySelectorAll(".card-overview");

    games.forEach((game, index) => {
      const card = cards[index];
      if (game.name.toLowerCase().includes(searchInput)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  setInterval(searchGames, 500);
});
