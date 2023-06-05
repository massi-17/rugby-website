let output = document.querySelector('.main')
let uno = document.querySelector('.uno')
let due = document.querySelector('.due')
let tre = document.querySelector('.tre')
let date = document.querySelector('.date')
let day1 = document.querySelector('.day1')
let dateA = document.querySelector('.date-a')
let dateB = document.querySelector('.date-b')
let dateC = document.querySelector('.date-c')
let container = document.querySelector('.container')
let dataApi = null
getData()
function teamNameWordsCount(tName) {
    if (tName.split(' ').length === 1) {
        return `<span class="first-name"></span> 
                <span class="second-name">${tName}</span>
                `
    } else {
        return `<span class="first-name">${tName.split(' ')[0]}</span> 
                <span class="second-name">${tName.split(' ')[1]}</span>`
    }
}
function getData() {
    fetch('matches.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dataApi = data
        let teamNameLx = dataApi.data[0].matches[0].teams[0].name
        let teamNameRx = data.data[0].matches[0].teams[1].name
        // dateA.innerHTML = data.data[0].date
        dateA.innerHTML = data.data[0].date
        dateB.innerHTML = data.data[1].date
        dateC.innerHTML = data.data[2].date
        for (let i = 0; i < 2; i++) {
            teamNameRx = data.data[0].matches[i].teams[1].name
            teamNameLx = data.data[0].matches[i].teams[0].name 
            uno.innerHTML += `
        <div class="wrapper-banner">
            <div class="banner">
                <div class="row-0">
                    <div class="time">${data.data[0].matches[i].type}</div>
                </div>
                <div class="row-1">
                    <div class="lx-logo">
                        <img src="./img/${data.data[0].matches[i].teams[0].logo}" class="logo">
                    </div>
                    <div class="column-1">
                        <div class="lx-team-name">
                        ${teamNameWordsCount(teamNameLx)}
                        </div>
                        <div class="lx-points">${data.data[0].matches[i].teams[0].score}</div>
                    </div>
                    <div class="column-2">        
                        <div class="rx-points">${data.data[0].matches[i].teams[1].score}</div>
                        <div class="rx-team-name">
                        ${teamNameWordsCount(teamNameRx)}
                        </div>
                    </div>
                    <div class="rx-logo">
                        <img src="./img/${data.data[0].matches[i].teams[1].logo}" class="logo">
                    </div>
                </div>
                    <div class="row-2">
                        <div class="position-lx">
                            <span class="pos">(P)</span>
                            <span class="th-lx">${data.data[0].matches[i].teams[0].position}TH</span>
                        </div>
                        <div class="stadium-name">${data.data[0].matches[i].place}</div>
                        <div class="position-rx">
                            <span class="th-rx">${data.data[0].matches[i].teams[1].position}TH</span>
                            <span class="pos">(P)</span>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="logo-stadium"><img src="./img/united-rugby-copy.png" class="logo-urc"></div>
                    </div> 
                </div>
                <div class="lx" style="background-color: rgb(${data.data[0].matches[i].teams[0].color})">
                    <div class="lx-bg"style="background-image: url('./img/${data.data[0].matches[i].teams[0].themeImage}.png')">
                    </div>
                </div>
                <div class="rx" style="background-color: rgb(${data.data[0].matches[i].teams[1].color})">
                <div class="rx-bg"style="background-image: url('./img/${data.data[0].matches[i].teams[1].themeImage}.png')">
                    </div>
                </div>
            </div>
        `
        }
        for (let j = 0; j < 4; j++) {
            teamNameRx = data.data[1].matches[j].teams[1].name
            teamNameLx = data.data[1].matches[j].teams[0].name 
            due.innerHTML += `
        <div class="wrapper-banner">
            <div class="banner">
                <div class="row-0">
                    <div class="time">${data.data[1].matches[j].type}</div>
                </div>
                <div class="row-1">
                    <div class="lx-logo">
                        <img src="./img/${data.data[1].matches[j].teams[0].logo}" class="logo">
                    </div>
                    <div class="column-1">
                        <div class="lx-team-name">
                        ${teamNameWordsCount(teamNameLx)}
                        </div>
                        <div class="lx-points">${data.data[1].matches[j].teams[0].score}</div>
                    </div>
                    <div class="column-2">        
                        <div class="rx-points">${data.data[1].matches[j].teams[1].score}</div>
                        <div class="rx-team-name">
                        ${teamNameWordsCount(teamNameRx)}
                        </div>
                    </div>
                    <div class="rx-logo">
                        <img src="./img/${data.data[1].matches[j].teams[1].logo}" class="logo">
                    </div>
                </div>
                    <div class="row-2">
                        <div class="position-lx">
                            <span class="pos">(P)</span>
                            <span class="th-lx">${data.data[1].matches[j].teams[0].position}TH</span>
                        </div>
                        <div class="stadium-name">${data.data[1].matches[j].place}</div>
                        <div class="position-rx">
                            <span class="th-rx">${data.data[1].matches[j].teams[1].position}TH</span>
                            <span class="pos">(P)</span>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="logo-stadium"><img src="./img/united-rugby-copy.png" class="logo-urc"></div>
                    </div> 
                </div>
                <div class="lx" style="background-color: rgb(${data.data[1].matches[j].teams[0].color})">
                    <div class="lx-bg"style="background-image: url('./img/${data.data[1].matches[j].teams[0].themeImage}.png')">
                    </div>
                </div>
                <div class="rx" style="background-color: rgb(${data.data[1].matches[j].teams[1].color})">
                <div class="rx-bg"style="background-image: url('./img/${data.data[1].matches[j].teams[1].themeImage}.png')">
                    </div>
                </div>
            </div>
        `
        }
        for (let x = 0; x < 2; x++) {
            teamNameRx = data.data[2].matches[x].teams[1].name
            teamNameLx = data.data[2].matches[x].teams[0].name 
            tre.innerHTML += `
        <div class="wrapper-banner">
            <div class="banner">
                <div class="row-0">
                    <div class="time">${data.data[2].matches[x].type}</div>
                </div>
                <div class="row-1">
                    <div class="lx-logo">
                        <img src="./img/${data.data[2].matches[x].teams[0].logo}" class="logo">
                    </div>
                    <div class="column-1">
                        <div class="lx-team-name">
                        ${teamNameWordsCount(teamNameLx)}
                        </div>
                        <div class="lx-points">${data.data[2].matches[x].teams[0].score}</div>
                    </div>
                    <div class="column-2">        
                        <div class="rx-points">${data.data[2].matches[x].teams[1].score}</div>
                        <div class="rx-team-name">
                        ${teamNameWordsCount(teamNameRx)}
                        </div>
                    </div>
                    <div class="rx-logo">
                        <img src="./img/${data.data[2].matches[x].teams[1].logo}" class="logo">
                    </div>
                </div>
                    <div class="row-2">
                        <div class="position-lx">
                            <span class="pos">(P)</span>
                            <span class="th-lx">${data.data[2].matches[x].teams[0].position}TH</span>
                        </div>
                        <div class="stadium-name">${data.data[2].matches[x].place}</div>
                        <div class="position-rx">
                            <span class="th-rx">${data.data[2].matches[x].teams[1].position}TH</span>
                            <span class="pos">(P)</span>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="logo-stadium"><img src="./img/united-rugby-copy.png" class="logo-urc"></div>
                    </div> 
                </div>
                <div class="lx" style="background-color: rgb(${data.data[2].matches[x].teams[0].color})">
                    <div class="lx-bg"style="background-image: url('./img/${data.data[2].matches[x].teams[0].themeImage}.png')">
                    </div>
                </div>
                <div class="rx" style="background-color: rgb(${data.data[2].matches[x].teams[1].color})">
                <div class="rx-bg"style="background-image: url('./img/${data.data[2].matches[x].teams[1].themeImage}.png')">
                    </div>
                </div>
            </div>
        `
        }
      })
      .catch(error => console.error(error))
}
