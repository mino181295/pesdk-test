$(document).ready(function(){
    
    var container = document.getElementById('editor');
    var license = '{"owner":"Matteo Minardi","version":"2.1","enterprise_license":false,"available_actions":["magic","filter","transform","sticker","text","adjustments","brush","focus","frames","camera"],"features":["adjustment","filter","focus","overlay","transform","text","sticker","frame","brush","camera"],"platform":"HTML5","app_identifiers":[],"api_token":"3sK3szMKc12s_Cc2HS9Yfg","domains":["https://api.photoeditorsdk.com"],"issued_at":1513170973,"expires_at":1515715200,"signature":"QQCgRXWU1qcOuaUqc9+oSgCZjijfmrtlgt5gWMVDqEn81GtvzHr7X/P+iqXkJXiZylS0P54Y/5vKP5fLIQGunZWoJWfDd3nub7NjgnfPDjcZpWL7axGqr9L+r6Cd+2M6Hqv2TULZU0+/7LDuaWTaJP3BUmi17h/zkcv0cwFrqfmQehd2Ds003TwBWW/Og72OW+5CJZ0UkaL2PX9jBhqwGD/uF69Q7q2nf/vR4GcVu8CmeXGF4W+R8Kq6WsRxGo+8ytK0fHHlwlWRctgn5K3RRRKq5Z+0EYRyPycsa3io3cETBmzeMfsage/hmhACuLKRbzxsFlLYFZ2H4uLfaSrKxa5GG3UjwJaapdFnS6bLIkR7RG5TPI2E17Bw7femX9LCZZnsba/ynZe2B6hiSNpQrOiLPp7F2AIW5a8K5lQT5E9On17JPH5Se33BORYZjf1SxouyN1pvswtZ75sDLRSNWLvNPpthbWdwZfuo9U300U05qVYmLo4NAGQleF95HUYfRc+7Tpl8EjSMyEpbfVwMFyQotrzC5q5eNhDBXoV5EyMent6UeyonNCGyCPflEt9m80VaYWgi7D71Hfklk1CKgj3/TmXTLuD3C+HfTtb0zqmI1LwQ6k2enjig24rUJfFiLKScpp3mb1vUH+bgyzSefIvX8K7KhMTzU+2WetU5HxQ="}';
    var img = createImg('../img/car.png');
    
    var editor = new PhotoEditorSDK.UI.DesktopUI({
        //Licenza e container
        license: license,
        container: container,
        language: 'en',
        responsive: true,        
        assets: { baseUrl: '/lib/pesdk/assets' },
        //Impostazioni editor
        editor: {
            image: img,   
            //Enable dei bottoni         
            displayCloseButton: true,
            enableExport: true,
            enableZoom: true,
            smoothUpscaling: true,
            //Enable delle funzioni e ordine
            tools: ['transform', 'filter', 'adjustments', 'text', 'overlay'],
            controlsOrder: [['adjustments', 'filter', 'overlay'], ['transform', 'text']],
            //Impostazioni di export
            export: {
                download: false,
                fileBasename: 'test',
                quality: 1
            }
        }       
    });
});

function createImg(path) {
    var img = new Image();
    img.src = path;
    return img;
}