const loadCategories=()=>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json()).then(data=>displayCategories(data.categories))
}

// {
// category: "Music"
// category_id: "1001"
// }
const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos').then(res=>res.json()).then(data=>displayVideos(data.videos))
}


const displayCategories=(categories)=>{
    const categoryContainer = document.getElementById('category-container')
    for(let cat of categories){
        // create elements
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //append elements
        categoryContainer.appendChild(categoryDiv)
    }
}
const displayVideos = (videos)=>{
    const videoContainer = document.getElementById('video-container')

    videos.forEach(video => {
        // create element
        const videoCard = document.createElement('div')
        videoCard.innerHTML=`

        <div class="card bg-base-100 ">
                    <figure class="relative ">
                        <img class="w-full h-[180px] object-cover"  src="${video.thumbnail}" />
                        <span class="absolute bottom-2 right-2 text-white bg-black p-1 px-2 rounded-sm text-sm">3hrs 56
                            min ago</span>
                    </figure>
                    <div class="flex py-5 px-0 gap-3">

                        <div>
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 class="font-bold text-xl">Midnight seren</h2>
                            <p class="flex items-center gap-1 py-1 text-[#17171780]"> ${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=QMxOVe0B9VzG&format=png" alt=""></p>
                            <p class=" text-[#17171780]">${video.others.views} views

</p>
                        </div>
                    </div>
                </div>

        `
        videoContainer.appendChild(videoCard)
    });
}
loadCategories()
loadVideos()