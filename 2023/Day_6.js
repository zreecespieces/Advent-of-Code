const examplesRaces = `Time:      7  15   30
Distance:  9  40  200`

const actualRaces = `Time:        4177     70     96
Distance:   249   1362   1127   1011`

const actualRacesNoSpace = `Time:        41777096
Distance:   249136211271011`

function parseNumbers(string) {
    return string.split(": ")[1].trim().split(" ").filter(v => v).map(v => Number(v.trim()))
}

function determineWaysToWin(string) {
    const [timeString, distanceString] = string.split("\n")
    const times = parseNumbers(timeString)
    const distances = parseNumbers(distanceString)

    // let productOfWaysToWin = 1
    let currentWaysToWin = 0

    for (let i = 0; i < times.length; i++) {
        const raceTime = times[i]
        const bestDistance = distances[i]

        for (let j = 1; j < raceTime; j++) {
            let distanceTraveled = (raceTime - j) * j
            if (distanceTraveled > bestDistance) currentWaysToWin++
        }

        // productOfWaysToWin *= currentWaysToWin
        // currentWaysToWin = 0
    }
    console.log(currentWaysToWin)
}

determineWaysToWin(actualRacesNoSpace)