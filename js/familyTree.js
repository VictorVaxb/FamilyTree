window.onload = function () { 

    var familyGroupTag = {
        group: true,
        template: "group"
    };
    
    var familyGroupTag3 = {
        group: true,
        template: "group3"
    };
    
    OrgChart.templates.group.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
    btnMinimize = 
                '<svg fill="#aeaeae" x="410" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                   '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                   '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
                '</svg>';
    btnMaximize = 
                '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                    '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                    '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
                '</svg>';
    btnMinimize3 = 
                '<svg fill="#aeaeae" x="630" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                    'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
                   '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
                   '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +     
                '</svg>';      
                
            OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
            OrgChart.templates.group.min.name = '<text data-width="230" data-text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
            OrgChart.templates.group.minBtn = btnMinimize +
                '<rect data-btn-min="{val}" x="410" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
            OrgChart.templates.group3 = Object.assign({}, OrgChart.templates.group);
            OrgChart.templates.group3.minBtn = btnMinimize3 +
                '<rect data-btn-min="{val}" x="630" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
            OrgChart.templates.group.min.maxBtn = btnMaximize +
                '<rect data-btn-max="{val}" x="198" y="47" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
    
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "diva",
        enableDragDrop: false,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "fecnac",
            img_0: "img",
            minBtn: "id",
            maxBtn: "id",
        },
        /* 
        tags: {
            f1: familyGroupTag,
            f2: familyGroupTag,
            f3: familyGroupTag3,
            f4: familyGroupTag
        },
        */
    });
    
    nodes = [
            // Papa de papi: Federico Del Carmen Martinez
            // Mama de papi: Rosa Amelia Rojas

            { id: 1, name: "Federico Del Carmen Martinez", img: "pics/man.jpg" },
            { id: 2, pid: 1, name: "Rosa Amelia Rojas", img: "pics/woman.jpg", tags: ['partner'] },

            { id: 5, pid: 1, ppid: 2, name: "Fermin Del Carmen Martinez Rojas", title: "Papi", img: "pics/man.jpg", fecnac: "28 Julio 1913" },
            { id: 6, pid: 5, name: "Raquel Bustamante", title: "Mami", img: "pics/raquelbustamante.png", tags: ['partner'] },
            
            { id: 10, pid: 5, ppid: 6, name: "Teresa Martinez", title: "Tere", img: "pics/woman.jpg" },
            { id: 11, pid: 5, ppid: 6, name: "Luisa Martinez", title: "Mamita", img: "pics/woman.jpg" },
            { id: 12, pid: 5, ppid: 6, name: "Hugo Martinez", title: "Chito", img: "pics/man.jpg" },
            { id: 13, pid: 5, ppid: 6, name: "Moncho Martinez", title: "Moncho", img: "pics/man.jpg" },
            { id: 14, pid: 5, ppid: 6, name: "Raquel Martinez", title: "Quela", img: "pics/raquelmartinez_2.png" },
            { id: 15, pid: 5, ppid: 6, name: "Mario Martinez", title: "Canario", img: "pics/man.jpg" },
            { id: 16, pid: 5, ppid: 6, name: "Brunilda Martinez", title: "Bruni", img: "pics/woman.jpg" },

            { id: 30, pid: 10, name: "Papa Paola", img: "pics/man.jpg", tags: ['partner'] },
            { id: 31, pid: 10, name: "Gabriel Zalazar", img: "pics/man.jpg", tags: ['partner'] },
            { id: 32, pid: 11, name: "Papa Raul", img: "pics/man.jpg", tags: ['partner'] },
            { id: 33, pid: 11, name: "Hugo Peñaloza", img: "pics/hugopenaloza.png", tags: ['partner'] },
            { id: 34, pid: 12, name: "Margarita ...", title: "Tia Maggy", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 35, pid: 14, name: "Papa Mario", img: "pics/man.jpg", tags: ['partner'] },
            { id: 36, pid: 14, name: "Jose Nivaldo Tapia", title: "Caluga", img: "pics/nivaldotapia.png", tags: ['partner'] },
            { id: 37, pid: 15, name: "Flor Aravena", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 38, pid: 16, name: "Chocolo", img: "pics/man.jpg", tags: ['partner'] },
            { id: 39, pid: 16, name: "Lautaro Morales", img: "pics/man.jpg", tags: ['partner'] },

            { id: 50, pid: 10, ppid: 30, name: "Paola", img: "pics/woman.jpg" },
            { id: 51, pid: 10, ppid: 31, name: "Ximena", img: "pics/woman.jpg" },
            { id: 52, pid: 10, ppid: 31, name: "Alejo", img: "pics/man.jpg" },
            
            { id: 60, pid: 11, ppid: 32, name: "Raul Maldonado", img: "pics/man.jpg" },
            { id: 61, pid: 11, ppid: 32, name: "Flavia Maldonado", img: "pics/woman.jpg" },
            { id: 62, pid: 11, ppid: 32, name: "Joselo Maldonado", img: "pics/man.jpg" },

            { id: 70, pid: 11, ppid: 33, name: "Yenny Miriam Peñaloza Martinez", img: "pics/yennypenaloza.png" },
            { id: 71, pid: 11, ppid: 33, name: "Victor Hugo Peñaloza Martinez", img: "pics/victorpenaloza.png" },
            { id: 72, pid: 11, ppid: 33, name: "Pablo Fermin Peñaloza Martinez", img: "pics/pablopenaloza.png" },

            { id: 80, pid: 12, ppid: 34, name: "Cristian Martinez", img: "pics/man.jpg" },
            { id: 81, pid: 12, ppid: 34, name: "Romina Martinez", img: "pics/woman.jpg" },
            { id: 82, pid: 12, ppid: 34, name: "Frederick Martinez", img: "pics/man.jpg" },

            { id: 90, pid: 14, ppid: 35, name: "Victor Mario Tapia Martinez", img: "pics/man.jpg" },
            { id: 91, pid: 14, ppid: 36, name: "Magaly Yamilet Tapia Martinez", img: "pics/woman.jpg" },
            { id: 92, pid: 14, ppid: 36, name: "Paola Marcela Tapia Martinez", img: "pics/woman.jpg" },
            { id: 93, pid: 14, ppid: 36, name: "Pablo Arnaldo Tapia Martinez", img: "pics/man.jpg" },
            { id: 94, pid: 14, ppid: 36, name: "Cesar Antonio Tapia Martinez", img: "pics/cesartapia.png" },

            { id: 100, pid: 15, ppid: 37, name: "Elizabeth Martinez", img: "pics/woman.jpg" },
            { id: 101, pid: 15, ppid: 37, name: "Alicia Martinez", img: "pics/woman.jpg" },

            { id: 110, pid: 16, ppid: 38, name: "Carol Ramirez", img: "pics/woman.jpg" },
            { id: 111, pid: 16, ppid: 39, name: "Natasha Morales", img: "pics/woman.jpg" },

            { id: 200, pid: 51, name: "Carlos Barrera", img: "pics/man.jpg", tags: ['partner'] },
            { id: 201, pid: 52, name: "Sra Alejo", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 202, pid: 50, name: "Cesar Villegas", img: "pics/man.jpg", tags: ['partner'] },
            { id: 203, pid: 70, name: "Mauricio Arturo Cesped", img: "pics/mauriciocesped.png", tags: ['partner'] },
            { id: 204, pid: 71, name: "Alma Cristina Negrete Shen", img: "pics/almanegrete.png", tags: ['partner'] },
            { id: 205, pid: 72, name: "Katy ....", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 206, pid: 60, name: "Jolanda ....", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 207, pid: 61, name: "Papa Geraldine", img: "pics/man.jpg", tags: ['partner'] },
            { id: 208, pid: 61, name: "Papa Camila", img: "pics/man.jpg", tags: ['partner'] },
            { id: 209, pid: 61, name: "Papa Paolo", img: "pics/man.jpg", tags: ['partner'] },
            { id: 210, pid: 62, name: "Miriam", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 211, pid: 80, name: "Pamela", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 212, pid: 81, name: "Jorge", img: "pics/man.jpg", tags: ['partner'] },
            { id: 213, pid: 82, name: "Sra Freddy", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 214, pid: 91, name: "Patricio Gonzalez", img: "pics/man.jpg", tags: ['partner'] },
            { id: 215, pid: 92, name: "Cristian Hernandez", img: "pics/man.jpg", tags: ['partner'] },
            { id: 216, pid: 94, name: "Yenny Ludueña", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 217, pid: 90, name: "Gina ...", img: "pics/woman.jpg", tags: ['partner'] },
            { id: 218, pid: 110, name: "Julio Martinez", img: "pics/man.jpg", tags: ['partner'] },

        ];
    
        
        chart.on('redraw', (sender) => {
                    let minBtns = document.querySelectorAll('*[data-btn-min]');
    
                    minBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.minimize(btn.getAttribute('data-btn-min'));
                        });
                    });
    
                    let maxBtns = document.querySelectorAll('*[data-btn-max]');
    
                    maxBtns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chart.maximize(btn.getAttribute('data-btn-max'));
                        });
                    });
    
                });
    
    
        chart.load(nodes);
    
    };