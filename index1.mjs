const _0x948afe = new _0x48982e("test", "4GjEzTU3CV", "b603cd0a1b16fb16edb05488464cffb953bd27bfbe415c44be3baa68a209e6be", "1.0");
import _0x1793b7 from "node-fetch";
import { list as _0x4f7179 } from "regedit";
import _0x534fd3 from "express";
import _0x36ee94 from "body-parser";
import _0x3c9ec3 from "https";
import _0x5d75d1 from "noblox.js";
import _0x2e8bf3 from "util";
import _0x3c964b from "os";
import _0x2c4a81 from "chalk";
import _0x4ba8fc from "prompt-sync";
import { GoogleAuth } from "google-auth-library";
import _0x3c1a7a from "axios";
const _0x4bf775 = "ALPHAv";
const _0x1d7925 = _0x2e8bf3.promisify(_0x4f7179);
const _0x2bc221 = _0x534fd3();
const _0x56ba4d = _0x4ba8fc();
const _0x1c1e53 = {};
const _0x5df9dd = new GoogleAuth(_0x1c1e53);
const _0x206cb8 = {};
_0x206cb8.version = "v4";
_0x206cb8.auth = _0x5df9dd;
let _0x2e3750;
const _0x2ec932 = async () => {
  const _0x239d3c = {};
  _0x239d3c.spreadsheetId = spreadsheetId;
  _0x239d3c.range = range;
  const _0x5d01e4 = await sheets.spreadsheets.values.get(_0x239d3c);
  return _0x5d01e4.data.values.map(_0x55d237 => _0x55d237[0]);
};
let _0x2cb034 = null;
let _0x5933d6 = null;
const _0x4f85f3 = {
  assetDelivery: _0x41bf01 => "https://assetdelivery.roblox.com/v1/asset/?id=" + _0x41bf01,
  publish: (_0x4cfef4, _0x4af3ac, _0x568630) => "https://www.roblox.com/ide/publish/uploadnewanimation?assetTypeName=Animation" + ("&name=" + encodeURIComponent(_0x4cfef4)) + ("&description=" + encodeURIComponent(_0x4af3ac)) + "&AllID=1&ispublic=False&allowComments=True&isGamesAsset=False" + (_0x568630 != null ? "&groupId=" + _0x568630 : "")
};
async function _0x1a66e9() {
  if (!process.platform !== "win32") {
    return;
  }
  const _0x310fc7 = "HKCU\\Software\\Roblox\\RobloxStudioBrowser\\roblox.com";
  const _0x195f23 = await _0x1d7925(_0x310fc7);
  if (!_0x195f23 || !_0x195f23[_0x310fc7] || !_0x195f23[_0x310fc7].values) {
    return;
  }
  const _0x541848 = result[_0x310fc7].values[".ROBLOSECURITY"];
  if (!_0x541848 || !_0x541848.value) {
    return;
  }
  const _0x3a35dd = _0x541848.value.split(",");
  for (const _0x466246 of _0x3a35dd) {
    const [_0x19ce2c, _0x101e81] = _0x466246.split("::");
    if (_0x19ce2c === "GHOST") {
      const _0x2d5fd9 = _0x101e81.substring(1, _0x101e81.length - 1);
      return _0x2d5fd9;
    }
  }
}
async function _0x468120(_0x2cf31d, _0x2c755b, _0x21ff85, _0x4d0533, _0xaf0671, _0x36d680) {
  console.log("Publishing animation Name: " + _0x21ff85);
  const _0x270d27 = await _0x1793b7(_0x4f85f3.publish(_0x21ff85, _0x4d0533, _0x36d680), {
    body: _0xaf0671,
    method: "POST",
    headers: {
      Cookie: ".ROBLOSECURITY=" + _0x2cf31d + ";",
      "X-CSRF-Token": _0x2c755b,
      "User-Agent": "RobloxStudio/WinInet",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
    }
  });
  if (_0x270d27.ok) {
    return await _0x270d27.text();
  } else {
    throw _0x270d27.status + " - " + (await _0x270d27.text());
  }
}
async function _0x515a4a(_0x27ab2e) {
  return await _0x1793b7(_0x4f85f3.assetDelivery(_0x27ab2e)).then(_0x18ebb0 => _0x18ebb0.blob());
}
_0x2bc221.use(_0x36ee94.json());
const _0x3ed8c6 = {};
let _0xe1ab17 = true;
_0x2bc221.get("/", (_0x4b6153, _0x46720c) => {
  if (_0xe1ab17) {
    return _0x46720c.json(null);
  }
  _0x46720c.json(_0x3ed8c6);
  process.exit();
});
_0x2bc221.post("/", async (_0x1e15b6, _0x57de06) => {
  const _0x453ebf = _0x1e15b6.body.cookie ?? (await _0x1a66e9());
  if (!_0x453ebf) {
    return console.error("Alexander - Invalid cookie and couldn't find in registry");
  }
  await _0x5d75d1.setCookie(_0x453ebf);
  const _0x4cb074 = await _0x5d75d1.getGeneralToken();
  _0x57de06.status(204).send();
  const _0x261abd = [];
  const _0x4f6809 = ["Alexander", "DNA", "DNA#9940", "DNADeptry", "DNA#1", "Family", "For U", "Changer", "Noice", "Remix", "Alex", "OMG", "Is Real", "Et O Et", "DNA On Top", "Credit To Alexander", "CopyRight Alex", "Alex#1", "This Version Made By Alexander", "Thanks For ALex", "Made By Alexander", "Not Joker", "Anonymous", "VietNam Number One", "I Love VietNam", "Thank", "Credit To DNA", "EZ", "HAHAAUTOANIMTION", "No One Known", "This Is Auto Animation Made By DNA#9940", "Credit", "Thanks Him", "Pray", "Bo Toc IT Team", "Nice", "Super DN", "erty", "cxza", "tyui", "bnmp", "ploi", "jyhn", "yvbn", "nmkl", "khdf", "xpoi", "vfre", "asdc", "qwaszx", "rtyu", "vgtr", "zxcvb", "xswq", "cdew", "ujnm", "fghj", "oiuy", "yuih", "wqerf", "thju", "jklm", "nbvm", "asdqwe", "hjkl", "poiu", "plkj", "vcdx", "mnb", "gfds", "nbvx", "xzvb", "fdsa", "uiop", "xcvb", "vbn", "xasz", "qweqwe", "zxcf", "asdfg", "bnvc", "mjnh", "gfdsaq", "plok", "cxfd", "mnbvc", "qwedsa", "jhgf", "rty", "vgf", "kjhg", "yhtg", "xse", "fghjk", "vcbn", "xswe", "bnm", "yuiop", "hjklp", "qwsa", "sdfg", "qaz", "wqasd", "zxc", "nbv", "bgfd", "cvbnm", "uytr", "mnbvca", "wqse", "lkjhgf", "zxcv", "bnx", "rtui", "awqe", "rtyui", "aqws", "ytgh", "xcv", "ghjk", "oiuyt", "vbnma", "qweas", "asdf", "oiuyh", "mnbva", "xqwe", "hgfdsa", "vbnmi", "qazx", "plokij", "ghjkl", "ytre", "zxcvas", "bvc", "klmn", "nbvcd", "fghjkl", "zxcvbn", "xsw", "lkj", "bnvx", "uytrf", "werty", "ghfd", "qwerty", "hjklpo", "dfgh", "cxz", "nmklj", "qazws", "uyt", "plmn", "qazwsxedc", "vbnc", "xc", "cghj", "bvcx", "aqw", "zvbn", "yuioplk", "qwer", "dfg", "awq", "rtyuio", "hjk", "qw", "yhg", "fgrtgbr", "abxc", "xznm", "trfv", "qwerf", "yui", "nmklp", "zsxc", "qwera", "hgfd", "poiuyt", "oiuhg", "yhb", "plkm", "aqweqw", "kljh", "zxcvm", "gfdsa", "zxcasd", "yxcvb", "mnvb", "gfdsaqw", "jhy", "mklo", "vnm", "dfrg", "zxcd", "jklh", "lkjhgfds", "qsdf", "ghjklo", "vfdx", "zxvn", "zxcdsa", "jhgfdsa", "qazwsxed", "kloi", "polk", "azxs", "yhgtr", "kjhgfd", "vbnmk", "ytrew", "jklmn", "asxdcf", "bvnm", "fdxs", "kjhy", "xswaq", "poiuh", "vfds", "nmbv", "fdcv", "qwerq", "cvbn", "xaszx", "lkjhgfd", "mnbvcx", "wqas", "vcxzbn", "klpoi", "vcxzsd", "ertyu", "vcxzas", "qwesd", "mlkj", "vcxzml", "vcx", "wqaszx", "vcxznb", "vcxzb", "vcxzasd", "vcxzlk", "vcxzq", "vcxzj", "vcxzm", "vcxzgf", "vcxzs", "vcxzv", "vcxzoi", "vcxzr", "vcxzhy", "vcxzt", "vcxzcv", "vcxzuy", "vcxzp", "vcxzdf", "vcxzxc", "vcxzpl", "vcxzui", "vcxzfg", "vcxzh", "vcxzty", "vcxzbnm", "vcxzwe", "vcxzrt", "vcxzgh", "vcxzjk", "vcxzxcv", "vcxzlkj", "vcxzpoi", "vcxznm", "vcxzqw", "vcxzvf", "vcxzasdf", "vcxzmnb", "vcxzxcvb", "vcxzkl", "vcxzds", "vcxztr", "vcxzgb", "vcxzxcz", "vcxzqwerty", "vcxzxc", "vcxzasx", "vcxzvbn", "vcxzlkjh", "vcxzxcvbn", "vcxzpol", "vcxzjh", "vcxzrty", "vcxznbv", "vcxzqwq", "vcxzuyt", "vcxzgfdsa", "vcxzlkjhg", "vcxzdsaqw", "vcxzasdfg", "vcxzrewq", "vcxzpoiuy", "vcxzxcvb", "vcxznmkl", "vcxzwq", "vcxzasqw", "vcxzxcv", "vcxzxczxc", "vcxzmlkj", "vcxzpoiuyt", "vcxzlkjhf", "vcxznbvc", "vcxzmnbv", "vcxzpoiuytr", "vcxzlkjhgf", "vcxzqwertas", "vcxzlkj", "vcxzlkjhgd", "vcxzgfds", "vcxzn", "vcxzxcvbnm"];
  for (const [_0x4c412b, _0x50d6d9] of Object.entries(_0x1e15b6.body.ids)) {
    let _0x48bf4a = 0;
    while (_0x48bf4a < 4) {
      _0x48bf4a++;
      try {
        if (_0x1e15b6.body.groupID) {
          _0x3ed8c6[_0x50d6d9] = await _0x468120(_0x453ebf, _0x4cb074, _0x4f6809[Math.floor(Math.random() * _0x4f6809.length)], _0x4f6809[Math.floor(Math.random() * _0x4f6809.length)], await _0x515a4a(_0x50d6d9), _0x1e15b6.body.groupID);
        } else {
          _0x3ed8c6[_0x50d6d9] = await _0x468120(_0x453ebf, _0x4cb074, _0x4f6809[Math.floor(Math.random() * _0x4f6809.length)], _0x4f6809[Math.floor(Math.random() * _0x4f6809.length)], await _0x515a4a(_0x50d6d9));
        }
        if (_0x3ed8c6[_0x50d6d9]) {
          break;
        }
      } catch (_0x485c82) {
        console.log(_0x4c412b, _0x2c4a81.red(_0x50d6d9), "--> RETRYING");
      }
    }
    if (_0x3ed8c6[_0x50d6d9]) {
      console.log(_0x4c412b, _0x2c4a81.red(_0x50d6d9), "-->", _0x3ed8c6[_0x50d6d9]);
    } else {
      console.log(_0x4c412b, _0x2c4a81.red(_0x50d6d9), "FAILED");
      _0x261abd.push(_0x50d6d9);
    }
  }
  console.log("Alexander - Finished reuploading animations");
  console.log("Failed to publish the following animations", _0x261abd);
  console.log(_0x3ed8c6);
  console.log("Made By Alexander");
  _0xe1ab17 = false;
});
(async () => {
  await _0x948afe.Initialize();
  let _0x15408e = "";
  let _0x590b13 = "";
  let _0x5d63af = "";
  let _0x4c8d12 = "";
  await _0x1cce8f.question("\n [1] Login\n [2] Register\n [3] Upgrade\n [4] Forgot password\n\n Choose option: ", async _0x41f984 => {
    _0x41f984 = await parseInt(_0x41f984);
    switch (_0x41f984) {
      case 1:
        await _0x1cce8f.question("\n Whats your Username: ", async _0x59a9b1 => {
          _0x15408e = _0x59a9b1;
          await _0x1cce8f.question(" Whats your Password: ", async _0x139741 => {
            _0x590b13 = _0x139741;
            await _0x948afe.login(_0x15408e, _0x590b13);
            _0x37318b();
            _0x1cce8f.close();
          });
        });
        break;
      case 2:
        await _0x1cce8f.question("\n Whats your Username: ", async _0x1047da => {
          _0x15408e = _0x1047da;
          await _0x1cce8f.question(" Whats your Password: ", async _0x1d23f8 => {
            _0x590b13 = _0x1d23f8;
            await _0x1cce8f.question(" Whats your License: ", async _0x258eaf => {
              _0x5d63af = _0x258eaf;
              await _0x1cce8f.question(" Whats your email (leave empty if none will be set) ", async _0x2000c3 => {
                _0x4c8d12 = _0x2000c3;
                await _0x948afe.register(_0x15408e, _0x590b13, _0x5d63af, _0x4c8d12);
                _0x37318b();
                _0x1cce8f.close();
              });
            });
          });
        });
        break;
      case 3:
        await _0x1cce8f.question("\n Whats your Username: ", async _0x297600 => {
          _0x15408e = _0x297600;
          await _0x1cce8f.question(" Whats your License: ", async _0x17adcd => {
            _0x5d63af = _0x17adcd;
            await _0x948afe.upgrade(_0x15408e, _0x5d63af);
            console.log("You have Successfully upgraded your account!");
            process.exit(0);
          });
        });
        break;
      case 4:
        await _0x1cce8f.question("\n Whats your username: ", async _0x1a444d => {
          _0x15408e = _0x1a444d;
          await _0x1cce8f.question("\n Whats your email (Optional): ", async _0x58fd43 => {
            _0x4c8d12 = _0x58fd43;
            await _0x948afe.forgot(_0x15408e, _0x4c8d12);
            console.log(_0x948afe.response.message);
            process.exit(0);
          });
        });
        break;
      default:
        console.log("Invalid option");
        _0x1cce8f.close();
        break;
    }
  });
  async function _0x37318b() {
    console.clear();
    console.log("Logged in!");
    _0x2bc221.listen(6969, () => console.log("Alexander - Hosting on 127.0.0.1:6969 - Version " + _0x4bf775));
  }
})();
