// script.js for Profile Page

class Faker {
    static async randomPeople() {
        // let unparsedData = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_height=300&_width=300');
        // let data = await unparsedData.json();
        // return data;
    };

    static async randomCoverImage() {
        let unparsedData = await fetch('https://picsum.photos/900/300');
        return unparsedData.url;
    };

   

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


class Document {
    static coverImageContainer = document.getElementById('coverImageContainer');
    static profilePictureContainer = document.getElementById('profilePictureContainer');
    static userNameContainer = document.getElementById('userNameContainer');
    static emailContainer = document.getElementById('emailContainer');
    static profileCardsContainer = document.getElementById('profileCardsContainer');

    static async populateFakeInfo() {

        let person = await Faker.randomPeople();
        let coverImage = await Faker.randomCoverImage();

        let image1 = await Faker.randomImage1();
        let image2 = await Faker.randomImage2();
        let image3 = await Faker.randomImage3();
        let image4 = await Faker.randomImage4();
        let image5 = await Faker.randomImage5();
        let image6 = await Faker.randomImage6();
        let image7 = await Faker.randomImage7();
        let image8 = await Faker.randomImage8();


        const imageArray = [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8];


            // <p class="font-size-30 bold no-margin">${person.data[0].firstname} ${person.data[0].lastname}</p>
            // <a class="custom-a-tag" href="#">${person.data[0].email}</a>
            // <a class="custom-a-tag" href="#">${person.data[0].website}</a>
            // <p>Title: ${imageArray[i].title}</p>
            // <p>Description:${imageArray[i].description} </p>


        // console.log(image1.data[0]);

        this.coverImageContainer.innerHTML = `
        <img class="round-corners" src="${coverImage}" width=85% alt="">
        `;

        this.profilePictureContainer.innerHTML = `
        <img class="round" src="${image1}" width="300px" alt="">
        `;

        this.userNameContainer.innerHTML = `
        <p class="font-size-30 bold no-margin">Stojan Stojanovski</p>
        `;

        this.emailContainer.innerHTML = `
        <p class="font-size-20 min-margin"
            <a class="custom-a-tag" href="#">trciLazi@email.com}</a>
        </p>
        <p class="font-size-20 min-margin">
          <a class="custom-a-tag" href="#">www.trcilazi.com</a>
        </p>
        `;

        for (let i = 0; i < imageArray.length; i++) {
            this.profileCardsContainer.innerHTML += `
            <div class="profile-card" style="allign-self:center">
                <div class="profile-card-image">
                    <img class="width300" src="${imageArray[i]}" alt="">
                    <div class="profile-card-likes">
                        <button>Like</button>
                        <p>number of likes</p>
                    </div>
                </div>
                <div class="profile-card-info">
                    <p>Title: Akvarel </p>
                    <p>Description: Gvash </p>
                    <p>Painting style: Photograph</p>
                    <p>Dimensions: 400 x 300 mm</p>
                    <p>Date of publish: ${new Date()}</p>
                </div>
            </div>
            `
        }


    }
};


Document.populateFakeInfo();
