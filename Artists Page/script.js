
class Faker {
    static async randomPeople() {
        // let unparsedData = await fetch('https://fakerapi.it/api/v1/persons?_quantity=50');
        // let data = await unparsedData.json();
        // return data;
    }

    static async randomImage1() {
        let unparsedData = await fetch('https://picsum.photos/402/300');
        return unparsedData.url;
    };

    static async randomImage2() {
        let unparsedData = await fetch('https://picsum.photos/403/300');
        return unparsedData.url;
    };

    static async randomImage3() {
        let unparsedData = await fetch('https://picsum.photos/404/300');
        return unparsedData.url;
    };

    static async randomImage4() {
        let unparsedData = await fetch('https://picsum.photos/400/300');
        return unparsedData.url;
    };

    static async randomImage5() {
        let unparsedData = await fetch('https://picsum.photos/401/301');
        return unparsedData.url;
    };

    static async randomImage6() {
        let unparsedData = await fetch('https://picsum.photos/401/302');
        return unparsedData.url;
    };

    static async randomImage7() {
        let unparsedData = await fetch('https://picsum.photos/401/303');
        return unparsedData.url;
    };

    static async randomImage8() {
        let unparsedData = await fetch('https://picsum.photos/399/300');
        return unparsedData.url;
    };
};




class Image {
    constructor(url, artistName, pictureName) {

        this.timeStamp = Date.now();
        this.dateAdded = new Date(this.timeStamp);

        this.url = url;

        this.artistName = artistName;
        this.name = pictureName;

        this.likes = 0;
        this.views = 0;

        this.id = `${Math.floor(Math.random() * 1000)}/${this.name}/${this.timeStamp}`;
    }
}

class Artist {
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;

        this.images = [];
    }
}



class Document {
    static artistCardsContainer = document.getElementById('artistCardsContainer');
    static artistCards = '';

    static async populateRandomArtists() {
        // let fakeUser = await Faker.randomPeople();
        // console.log(fakeUser);

        const image1 = await Faker.randomImage1();
        const image2 = await Faker.randomImage2();
        const image3 = await Faker.randomImage3();
        const image4 = await Faker.randomImage4();
        const image5 = await Faker.randomImage5();
        const image6 = await Faker.randomImage6();
        const image7 = await Faker.randomImage7();
        const image8 = await Faker.randomImage8();


        const imageArray = [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,];


        // <h2>${user.firstname} ${user.lastname}</h2>
        imageArray.forEach((user, index) => {
        // fakeUser.data.forEach((user, index) => {

            this.artistCardsContainer.innerHTML += `
                <div class="artistCard horizontal-card center">
                    <div class="hor-card-info">
                        <h2>Hehe Hahah</h2>

                        <h3>Total views: ${Math.floor(Math.random() * 10000)}</h3>
                        <h3>Total likes: ${Math.floor(Math.random() * 1000)} </h3>
                        <h3>Number of paintings: ${Math.floor(Math.random() * 10) + 10}</h3>
                    </div>
                    
                    <div class="hor-card-images">
                        <div class="hor-card-image-element">
                            <img src="${imageArray[Math.floor(Math.random() * 8)]}" height="200px" alt="">
                        </div>    
                        <div class="hor-card-image-element">
                            <img src="${imageArray[Math.floor(Math.random() * 8)]}" height="200px" alt="">

                        </div>    
                        <div class="hor-card-image-element">
                            <img src="${imageArray[Math.floor(Math.random() * 8)]}" height="200px" alt="">

                        </div>    
                          <div class="hor-card-image-element">
                            <img src="${imageArray[Math.floor(Math.random() * 8)]}" height="200px" alt="">
                        </div>                        
                    </div>
                </div>    
                     `
        });

        //add event listeners for the cards after resolving

        this.artistCards = document.getElementsByClassName('artistCard');

        for (let i = 0; i < this.artistCards.length; i++) {
            this.artistCards[i].addEventListener('click', () => {
                location.href = "../ProfilePage/index.html";
            })
        }
    }
};



Document.populateRandomArtists();
// Homepage.selectArtist();

