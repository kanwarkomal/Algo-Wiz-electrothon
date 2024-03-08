
function previewImage(fileInputId, previewId) {
    var preview = document.getElementById(previewId);
    var input = document.getElementById(fileInputId);
    // var fileDetails = document.getElementById(fileDetailsId);
    
    var file = input.files[0];

    preview.innerHTML = '';
    
    if (file) {
        // Check if the selected file is a PNG image
        if (file.type === 'image/png') {
            var reader = new FileReader();

            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.style.maxWidth = '100%';
                preview.appendChild(image);

                // Display file details
                fileDetails.textContent = 'File Name: ' + file.name + ', Size: ' + formatFileSize(file.size);
            };

            reader.readAsDataURL(file);
        } else {
            // Display an alert for non-PNG images
            alert('Please choose a PNG image.');
            input.value = ''; // Clear the input field
        }
    }
    // if (file) {
    //     var reader = new FileReader();

    //     reader.onload = function(e) {
    //         var image = new Image();
    //         image.src = e.target.result;
    //         image.style.maxWidth = '100%';
    //         preview.appendChild(image);
    //     };

    //     reader.readAsDataURL(file);
    // }
}
function removeFile(fileInputId, previewId, fileDetailsId) {
    var input = document.getElementById(fileInputId);
    input.value = null;

    var preview = document.getElementById(previewId);
    preview.innerHTML = '';

    var fileDetails = document.getElementById(fileDetailsId);
    fileDetails.textContent = '';
}

function uploadFile() {
    var fileInput1 = document.getElementById('fileInput1');
        
}
document.addEventListener('DOMContentLoaded', function () {
    // Check if image history is stored in localStorage
    const imageHistory = JSON.parse(localStorage.getItem('imageHistory')) || [];

    // Display image history on the page
    const imageHistoryContainer = document.getElementById('imageHistory');

    if (imageHistory.length > 0) {
        imageHistory.forEach((image) => {
            const imageDetails = createImageDetails(image);
            imageHistoryContainer.appendChild(imageDetails);
        });
    } else {
        imageHistoryContainer.innerHTML = '<p>No image history available.</p>';
    }
});

function createImageDetails(image) {
    const imageDetailsContainer = document.createElement('div');
    imageDetailsContainer.classList.add('image-details');

    const imageElement = document.createElement('img');
    imageElement.src = image.url;
    imageElement.alt = 'Image';

    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `<p><strong>Date:</strong> ${image.date}</p>
                                <p><strong>Description:</strong> ${image.description}</p>`;

    imageDetailsContainer.appendChild(imageElement);
    imageDetailsContainer.appendChild(detailsElement);

    return imageDetailsContainer;
}

