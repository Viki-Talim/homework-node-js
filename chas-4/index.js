// fs.unlink
// fs.mkdir
// fs.appendFile
// fs.rmdir
// readFile
// writeFile

const fs = require("fs");

const makeDir = (dirName) => {
    return new Promise ((success, fail) => {
        fs.mkdir(dirName, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};

const fileWrite = (filename, data) => {
    return new Promise ((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};
const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const fileAppend = (filename, data) => {
    return new Promise ((success, fail) => {
        fs.appendFile(filename, data, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};

const fileUnlink = (filename) => {
    return new Promise ((success, fail) => {
        fs.unlink(filename, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};

const removeDir = (dirName) => {
    return new Promise ((success, fail) => {
        fs.rmdir(dirName, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};
const main = async () => {
    try {
        await makeDir('domasna-fs');
        console.log("1.Papkata e kreirana");
        
        await fileWrite('./domasna-fs/novfajl.txt', 'Prv red vo fajlot.');
        console.log("2.Fajlot e kreiran i dodaden e tekst");
        
        await fileAppend('./domasna-fs/novfajl.txt', 'Ova e dopolnitelen tekst vo fajlot');
        console.log("3.Dodaden e tekst");
        
        const sodrzina = await fileRead('./domasna-fs/novfajl.txt') ;
        console.log("4.", sodrzina);

        await fileUnlink('./domasna-fs/novfajl.txt');
        console.log("5.Fajlot e izbrisan");

        await removeDir('./domasna-fs');
        console.log("6.Papkata e izbrisana");
        
    }
    catch (err) {
    console.log("Nastana greska", err);
  }
};
main ();