var rf_templates = [
    {
        x: 10,
        y: 40,
        style: `
@font-face {
    font-family: futura-medium;
    src: url("futuramdbtrusbyme_medium.otf");
}
@font-face {
    font-family: light;
    src: url("futura-light-bt.ttf")
}
.TNO-header-text {
    color: white;
    font-family: futura-medium;
}
.TNO-info-text {
    color: #B2C9C2;
    font-family: aldrich;
}
body {
    background-color: #000000
}
          `,
        elements: [
            {
                id: "flag",
                type: "image",
                src: "flag_unknown.png",
                x: 35,
                y: 56,
                width: 82,
                height: 50,
                replaceable: true
            },
            {
                id: "portrait",
                type: "image", src: "leader_unknown.png",
                x: 18, y: 167,
                width: 115, height: 154,
                replaceable: true
            },
            {
                type: "image", src: "hyzzE6n.png",
                x: 0, y: 0
            },
            {
                type: "image", src: "заглушка.png",
                x: 182, y: 84,
                classes: ["center"],
                replaceable: true
            },
            {
                type: "text", text: "Country Name",
                x: 220, y: 35,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Faction Name",
                x: 220, y: 63,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Leader Name",
                x: 220, y: 83,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Party Name",
                x: 246, y: 157,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Ideology",
                x: 246, y: 173,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Subideology",
                x: 246, y: 190,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "text", text: "Election Label",
                x: 246, y: 208,
                classes: ["TNO-header-text"], style: "font-size: 14px",
                replaceable: true
            },
            {
                type: "circle",
                x: 156, y: 175,
                width: 62, height: 61,
                style: "border-radius: 50%; background-color: #888888;",
                replaceable: true
            },
            /*{
                type: "image", src: "pol_piechart_overlay.png",
                x: 141, y: 81,
            },*/
            {
                type: "image", src: "заглушка.png",
                x: 190, y: 288,
                classes: ["center"], style: "transform: scale(90%) translate(-50%, -55%);",
                replaceable: true
            },
            {
                type: "text", text: "Focus Name",
                x: 254, y: 256,
                width: 240,
                classes: ["TNO-header-text"], style: "font-size: 18px; text-align: center;",
                replaceable: true
            }
        ]
    },
    {
        x: 540,
        y: 40,
        elements: [
            {
                type: "image", src: "superevent_unknown.png",
                x: 25, y: 243,
                width: 443, height: 228,
                replaceable: true,
                style: "z-index: -10"
            },
            /*{
                type: "image", src: "pngwing.com.png",
                x: 156, y: 175,
                width: 64, height: 63,
                style: "z-index: 10;"
            },*/
            {
                type: "text", text: "Quote\n-A person",
                x: 58, y: 492,
                width: 373,
                classes: ["TNO-header-text"], style: "font-size: 15px; text-align: center;",
                replaceable: true
            },
            {
                type: "text", text: "Button Text",
                x: 141, y: 457,
                width: 200,
                classes: ["TNO-header-text"], style: "font-size: 17px; text-align: center; text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #000000, 0 -1px 1px #000000;",
                replaceable: true
            },
            {
                type: "text", text: "Event Title",
                x: 54, y: 528,
                width: 386,
                classes: ["TNO-header-text"], style: "font-size: 15px; text-align: center;",
                replaceable: true
            }
        ]
    },
    {
        x: 10, y: 280,
        style: `.TNO-news-text {
    color: black;
    font-family: 'Times New Roman', sans-serif;
}`,
        elements: [
            /*{
                type: "image", src: "news_event.png",
                x: 0, y: 0
            },
            {
                type: "image", src: "flag_unknown.png",
                x: 27, y: 139,
                width: 161, height: 420,
                replaceable: true
            },
            {
                type: "image", src: "news_event_overlay.png",
                x: 27, y: 139,
                width: 161, height: 420
            },*/
            {
                type: "text", text: " ",
                x: 34, y: 82,
                width: 460,
                classes: [`TNO-news-text`], style: "font-size: 22px; text-align: center;",
                replaceable: true
            },
            {
                type: "text", text: " ",
                x: 195, y: 140,
                width: 310,
                classes: [`TNO-news-text`], style: "font-size: 16px; text-align: left;",
                replaceable: true
            },
            /*{
                type: "image", src: "event_option_entry.png",
                x: 165, y: 496
            },*/
            {
                type: "text", text: " ",
                x: 172, y: 484,
                width: 340, height: 40,
                classes: [`TNO-news-text`], style: "justify-content: center; display: flex; align-items: center; text-align: center",
                replaceable: true
            }
        ]
    }
]

var templates = [];
const urlParams = new URL(window.location.href).searchParams;
templates = rf_templates;
document.getElementById("q-drop").innerHTML = document.getElementById("q-drop").innerText;
