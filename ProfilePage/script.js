// script.js for Profile Page

class Faker {
    static async randomPeople() {
        let unparsedData = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_height=300&_width=300');
        let data = await unparsedData.json();
        return data;
    };

    static async randomImage() {
        let unparsedData = await fetch(' https://fakerapi.it/api/v1/images?_quantity=1&_type=any&_height=300&_width=900');
        let data = await unparsedData.json();
        return data;
    };
};

class Document {
    static coverImageContainer = document.getElementById('coverImageContainer');
    static profilePictureContainer = document.getElementById('profilePictureContainer');
    static userNameContainer = document.getElementById('userNameContainer');
    static emailContainer = document.getElementById('emailContainer');

    static async populateFakeInfo() {

        let person = await Faker.randomPeople();
        let coverImage = await Faker.randomImage();

        console.log(person.data[0]);

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
    }
};


Document.populateFakeInfo();
