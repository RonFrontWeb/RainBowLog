function rainbowLog(string) {
    var text = "";
    let colors = ["FgRed","FgBlack","FgGreen","FgYellow","FgBlue","FgMagenta","FgCyan","FgWhite"];
    for (let i = 0; i < string.length; i++) {
        var rnd = Math.floor(Math.random() * colors.length);
        text += forColors[colors[rnd]] + string[i];
    }
    console.log(text );
}



var forColors = {
    FgBlack : "\x1b[30m",
    FgRed : "\x1b[31m",
    FgGreen : "\x1b[32m",
    FgYellow : "\x1b[33m",
    FgBlue : "\x1b[34m",
    FgMagenta : "\x1b[35m",
    FgCyan : "\x1b[36m",
    FgWhite : "\x1b[37m",
}


module.exports = rainbowLog

