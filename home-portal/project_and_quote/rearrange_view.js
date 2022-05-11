if (
    window.location.href.substring(0, 71) ==
        'https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam' ||
    window.location.href.substring(0, 67) == 'https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam'
) {
    let rearange_view_interval = setInterval(function () {
        if ($('[class^="input__item"]').length >= 34) {
            clearInterval(rearange_view_interval);
            setTimeout(function () {
                /////////////////////////rearange view///////////////////////////
                let inputs = $('[class^="input__item"]');
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].querySelector('div')?.innerText == 'Client') {
                        var client = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Service') {
                        var service = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Created on') {
                        var created = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Actual Start Date') {
                        var actual = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Offer Expiration') {
                        var expaire = inputs[i];
                    } else if (
                        inputs[i].querySelector('div')?.innerText == 'Expected Delivery Date' ||
                        inputs[i].querySelector('div')?.innerText == 'Client Deadline'
                    ) {
                        var deadline = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Business Days') {
                        var working = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Client Reference Number') {
                        var referance = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Volume (Minute)') {
                        var volume = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Origin') {
                        var origin = inputs[i];
                    } else if (inputs[i].querySelector('div')?.innerText == 'Ordered on') {
                        var orderedon = inputs[i];
                    }
                }
                let inputscustomfields = $('[class^="input__item custom_field"]');
                for (let i = 0; i < inputscustomfields.length; i++) {
                    if (inputscustomfields[i].querySelector('div')?.innerText == 'Estimated Start Date') {
                        var expexteddate = inputscustomfields[i];
                    } else if (
                        inputscustomfields[i].querySelector('div')?.innerText == 'number of video files' ||
                        inputscustomfields[i].querySelector('div')?.innerText == 'Number of pages'
                    ) {
                        var quantity = inputscustomfields[i];
                    }
                }
                if (actual != undefined && created != undefined) {
                    created.appendChild(actual);
                }
                client.appendChild(service);
                deadline.appendChild(expexteddate);
                if (working) {
                    working.style.display = 'none';
                    referance.style.display = 'none';
                }
                volume.appendChild(quantity);
                if (expaire) {
                    origin.appendChild(expaire);
                } else {
                    origin.appendChild(orderedon);
                }
                let pmvewrification;
                let clientreview;
                let qc;
                let customfields = document.querySelectorAll('div[class="input__item custom_field"]');
                for (let k = 0; k < customfields.length; k++) {
                    if (customfields[k].querySelector('div').textContent == 'PM Verification') {
                        pmvewrification = customfields[k];
                    } else if (customfields[k].querySelector('div').textContent == 'Client Review') {
                        clientreview = customfields[k];
                    } else if (customfields[k].querySelector('div').textContent == 'QC') {
                        qc = customfields[k];
                    }
                }

                for (let m = 0; m < document.querySelectorAll('span[class="checkbox_box"]').length; m++) {
                    document.querySelectorAll('span[class="checkbox_box"]')[m].style.width = '17%';
                }

                for (let i = 0; i < inputscustomfields.length; i++) {
                    if (inputscustomfields[i].querySelector('div')) {
                        if (inputscustomfields[i].querySelector('div').innerText == 'Estimated Start Date') {
                            var expexteddate = inputscustomfields[i];
                        }
                    }
                }
                for (let k = 0; k < customfields.length; k++) {
                    if (customfields[k].querySelector('div').textContent == 'Working Days') {
                        var workingdays = customfields[k];
                    }
                }
                expexteddate.append(workingdays);
            }, 1000);
        }
    }, 500);
}
