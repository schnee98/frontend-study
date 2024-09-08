const fs = require('fs');
const path = require('path');

const users = ["Saturn", "marron", "mime", "schnee", "Woody"];
const sourceDirName = 'typescript';

const sourceDir = path.join(__dirname, sourceDirName);

function moveFiles(weekDir, user) {
  const weekPath = path.join(`${sourceDir}/${user}/${weekDir}`);

  const questionsFile = path.join(weekPath, 'questions.md');
  if (fs.existsSync(questionsFile)) {
    const newQuestionsPath = path.join(
      __dirname,
      `${sourceDirName}/${weekDir}/questions/${user}_questions.md`
    );
    fs.mkdirSync(path.dirname(newQuestionsPath), { recursive: true });
    fs.renameSync(questionsFile, newQuestionsPath);
  }

  const solutionsFile = path.join(weekPath, 'solutions.md');
  if (fs.existsSync(solutionsFile)) {
    const newSolutionsPath = path.join(
      __dirname,
      `${sourceDirName}/${weekDir}/solutions/${user}_solutions.md`
    );
    fs.mkdirSync(path.dirname(newSolutionsPath), { recursive: true });
    fs.renameSync(solutionsFile, newSolutionsPath);
  }

  const summaryFile = path.join(weekPath, 'summary.md');
  if (fs.existsSync(summaryFile)) {
    const newSummaryPath = path.join(
      __dirname,
      `${sourceDirName}/${weekDir}/summary/${user}_summary.md`
    );
    fs.mkdirSync(path.dirname(newSummaryPath), { recursive: true });
    fs.renameSync(summaryFile, newSummaryPath);
  }
}

users.forEach((user) => {
  const weeks = fs.readdirSync(`${sourceDir}/${user}`);
  weeks.forEach((week) => {
    const weekPath = path.join(sourceDir, week);

    if (!fs.existsSync(weekPath)) {
      console.log(`주차 폴더가 존재하지 않아 생성 중: ${weekPath}`);
      fs.mkdirSync(weekPath, { recursive: true });
    }

    if (fs.lstatSync(weekPath).isDirectory()) {
      moveFiles(week, user);
    }
  });
})

console.log('파일 이동 완료!');
