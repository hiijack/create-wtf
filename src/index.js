import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'
import minimist from 'minimist';

const AllTemplates = ['umi', 'wtf', 'koa'];

const argvs = minimist(process.argv.slice(2), { string: ['_'] });
const cwd = process.cwd();

let { template } = argvs;

// default template
if (!template || AllTemplates.indexOf(template) < 0) {
  template = 'umi';
}

const templateDir = path.resolve(fileURLToPath(import.meta.url), '../..', `template-${template}`);
const root = path.join(cwd, '.');

// 将模版文件拷贝至当前目录
const files = fs.readdirSync(templateDir);
for (const f of files) {
  const targetPath = path.join(root, f);
  copy(path.join(templateDir, f), targetPath);
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}