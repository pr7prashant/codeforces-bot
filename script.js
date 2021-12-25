const fs = require('fs');
const axios = require('axios');

const contestId = process.argv[2];
const url = `https://codeforces.com/api/contest.standings?contestId=${contestId}&showUnofficial=true&from=1&count=10`;

const createFiles = (contest, problems) => {
    // Remove Special Characters from Directory Name
    let contestName = contest.name.replace(/[^a-zA-Z ]/g, "");
    contestName = contest.name.split(' ').join('_');
    const contestDir = `${__dirname}/../${contestName}`;

    // Create Contest Directory
    if (!fs.existsSync(contestDir)) {
        fs.mkdirSync(contestDir, { recursive: true });
    }

    // Create Directory For Each Problems
    problems.forEach(problem => {
        // Remove Special Characters from Directory Name
        let problemName = problem.name.replace(/[^a-zA-Z ]/g, "");
        problemName = `${problem.index}_${problemName.split(' ').join('_')}`;
        const problemDir = `${contestDir}/${problemName}`;
        
        // Create Problem Directory
        fs.mkdirSync(problemDir, { recursive: true });

        // Copy Template File in Problem Directory and Rename as Problem Index
        fs.copyFileSync(`${contestDir}/../codeforces-bot/template.cpp`, `${problemDir}/${problem.index}.cpp`);
    });
};

axios.get(url)
    .then(response => {
        const { result } = response.data;

        console.log('Contest : ', result.contest);
        console.log('Problems : ', result.problems);

        createFiles(result.contest, result.problems);
    })
    .catch(err => {
        console.log(err);
    });
