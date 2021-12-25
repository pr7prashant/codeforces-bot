## `Codeforces Bot` is a `Node` script that creates folder structure along with solution files with a template for a Codeforces contest.

## Usage
- ##### Go to your coding directory
````
    cd ./codeforces
````

- ##### Clone codeforces-bot
````
    git clone https://github.com/pr7prashant/codeforces-bot.git
````

- ##### Install Dependencies
````
    cd ./codeforces-bot
    
    yarn install
````

- ##### Run script with Contest ID
````
    // Generating folder structure for Contest 1615
    node script.js "1615"
````

### Note:
##### You can get the contest ID from the Problem URL.
##### For example: `https://codeforces.com/contest/1615/problem/A`
##### The Contest directory will be generated in your coding directory, `codeforces` directory in this example.
