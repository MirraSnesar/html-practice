const newSrc = instagramPhotos.indexOf(currentSrc) === 0 ? instagramPhotos[instagramPhotos.length - 1] : instagramPhotos[instagramPhotos.indexOf(currentSrc) - 1]
    const newPhoto = document.createElement('img')
    newPhoto.src = newSrc
    newPhoto.alt = 'Large Instagram photo'
    newPhoto.className = 'footer__instagram-large-img'
    newPhoto.style.transform = 'translateX(-100%)'
    newPhoto.style.display = 'none'
    
    setTimeout( () => {
        largePhotosContainer.removeChild(largePhotosContainer.firstChild)
        largePhotosContainer.append(newPhoto)
        newPhoto.style.display = 'initial'
        setTimeout( () => {
            newPhoto.style.transform = 'translateX(0%)'
        }, 10)    
    }, 300)
}