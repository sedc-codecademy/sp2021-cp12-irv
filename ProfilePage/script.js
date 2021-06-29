// script.js for Profile Page

class Faker {
    static async randomPeople() {
        let unparsedData = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_height=300&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomCoverImage() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=300&_width=900');
        let data = await unparsedData.json();
        return data;
    };

    static async randomCoverImage() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=300&_width=900');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage1() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=400&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage2() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=401&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage3() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=402&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage4() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=403&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage5() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=404&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage6() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=405&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage7() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=403&_width=301');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage8() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=403&_width=302');
        let data = await unparsedData.json();
        return data;
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


        let imageArray = [
            image1.data[0],
            image2.data[0],
            image3.data[0],
            image4.data[0],
            image5.data[0],
            image6.data[0],
            image7.data[0],
            image8.data[0]];



        console.log(image1.data[0]);

        this.coverImageContainer.innerHTML = `
        <img class="round-corners" src="${coverImage.data[0].url}" width=85% alt="">
        `;

        this.profilePictureContainer.innerHTML = `
        <img class="round" src="${person.data[0].image}" width="300px" alt="">
        `;

        this.userNameContainer.innerHTML = `
        <p class="font-size-30 bold no-margin">${person.data[0].firstname} ${person.data[0].lastname}</p>
        `;

        this.emailContainer.innerHTML = `
        <p class="font-size-20 min-margin"
            <a class="custom-a-tag" href="#">${person.data[0].email}</a>
        </p>
        <p class="font-size-20 min-margin">
          <a class="custom-a-tag" href="#">${person.data[0].website}</a>
        </p>
        `;

        for (let i = 0; i < imageArray.length; i++) {
            this.profileCardsContainer.innerHTML += `
            <div class="profile-card" style="allign-self:center">
                <div class="profile-card-image">
                    <img class="width300" src="${imageArray[i].url}" alt="">
                    <div class="profile-card-likes">
                        <button>Like</button>
                        <p>number of likes</p>
                    </div>
                </div>
                <div class="profile-card-info">
                    <p>Title: ${imageArray[i].title}</p>
                    <p>Description:${imageArray[i].description} </p>
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
