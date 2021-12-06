import { renameSync, readdirSync, mkdirSync, rmSync } from "fs";
import { join, dirname } from "path";
// import { exit } from "process";

const mainFolder = "."
const ignoreFolder = "build"
const destinationFolder = ""

/**
 * @argument {string} dir
 * @yields {{entry:Dirent, dir:string}} */
function* walkSync(dir) {
  for (const entry of readdirSync(dir, {withFileTypes:true})) {
    if (entry.isDirectory()) {
      yield* walkSync(join(dir, entry.name))
    } else {
      yield {entry, dir}
    }
  }
}

// if (!existsSync("temp")) {
//   mkdirSync("temp")
//   mkdirSync("temp/hello")
//   mkdirSync("temp/hell")
//   writeFileSync("temp/test.txt", "this is a test")
//   writeFileSync("temp/hello/world.txt", "there's a world out there waiting")
//   mkdirSync("temp/hello/wo", {recursive:true})
//   writeFileSync("temp/hello/wo/cd.txt", "there's a world out there?!")
//   writeFileSync("temp/hell/wod.txt", "tee' wod o tee ain")
//   exit(0)
// }

// firstly walk mainFolder and remove all files and folders except the ignoreFolder
for (const entry of walkSync(mainFolder)) {
  const filename = entry.entry.name
  const path = entry.dir
  const relpath = join(path, filename);
  if (!relpath.startsWith(ignoreFolder)) {
    try {
      // console.log(relpath, "was deleted");
      // console.log(parse(relpath));
      rmSync(relpath, {recursive:true, force:true})
    } catch (error) {
      // console.log(error);
    // catch the error because of rmSync might've already removed a file/folder
    }
  }
}

// then move all of the files/folders from ignoredFolder to the destinationFolder
for (const entry of walkSync(`${join(mainFolder, ignoreFolder)}`)) {
  const filename = entry.entry.name
  const path = entry.dir
  const relPath = join(path, filename);
  const newPath = relPath.replace(ignoreFolder + "/", destinationFolder)
  // console.log(`Renaming: ${relPath}\nto: ${newPath}`);
  try {
    mkdirSync(dirname(newPath), {recursive:true})
    renameSync(relPath, newPath) 
  } catch (error) {
    console.log("failed on:", newPath);
    console.log(error);
  }
}

// lastly remove the empty ignoredFolder
// console.log("deleting:", ignoreFolder);
rmSync(ignoreFolder, {recursive:true, force:true})