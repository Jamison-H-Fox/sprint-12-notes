const commands = [
    'goto bucketA',
    'create fileA',
    'create fileB',
    'create fileA',
    'goto bucketB',
    'goto bucketC',
    'create fileA',
    'create fileB',
    'create fileC',
    'goto bucketB',
    'create fileA',
    'create fileB',
    'goto bucketZ',
    'create fileK',
    'create fileA',
    'create fileB',
    'create fileC',
    'create fileZ',
]

function solution(commands) {
    const buildCounterObj = () => {
        let tempCounterObj = {};
        let pointer = '';

        for(i = 0; i < commands.length; i++){
            if(commands[i][0] === 'g') {
                let directory = commands[i].slice(5)

                if(!(directory in tempCounterObj)){
                    tempCounterObj[directory] = {};
                }

                pointer = directory;
            }
            if(commands[i][0] === 'c') {
                let file = commands[i].slice(7)
                if(!(file in tempCounterObj[pointer])){
                    tempCounterObj[pointer][file] = '';
                }
            }
        }

        return tempCounterObj;
    }

    const findLargestBucket = () =>{
        const counterObj = buildCounterObj();
        const bucketsArray = Object.keys(counterObj);
        let largestBucketCount = 0;
        let largestBucketName = '';

        for(i = 0; i < bucketsArray.length; i++){
            let fileCount = Object.keys(counterObj[bucketsArray[i]]).length;
            if (fileCount > largestBucketCount) {
                largestBucketCount = fileCount;
                largestBucketName = bucketsArray[i];
            };
        }

        return largestBucketName
    }
    
    return findLargestBucket()
}

console.log(solution(commands))