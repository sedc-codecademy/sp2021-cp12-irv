
class Faker {
    static async randomPeople() {
        let unparsedData = await fetch('https://fakerapi.it/api/v1/persons?_quantity=50');
        let data = await unparsedData.json();
        return data;
    }
};

class Homepage {
    static artistCardsContainer = document.getElementById('artistCardsContainer');
    static artistCards = '';

    static async populateRandomArtists() {
        let fakeUser = await Faker.randomPeople();
        console.log(fakeUser);
        fakeUser.data.forEach((user) => {


            this.artistCardsContainer.innerHTML += `
                <div class="artistCard horizontal-card center">
                    <div class="hor-card-info">
                        <h2>Artist name: ${user.firstname} ${user.lastname}</h2>
                        <h3>Total views: ${Math.floor(Math.random() * 10000)}</h3>
                        <h3>Total likes: ${Math.floor(Math.random() * 1000)} </h3>
                        <h3>Number of paintings: ${Math.floor(Math.random() * 10) + 10}</h3>
                    </div>
                    
                    <div class="hor-card-images">
                        <div class="hor-card-image-element">
                            <img src="Images/Image${Math.ceil(Math.random() * 12)}.jpg" height="200px" alt="">
                        </div>    
                        <div class="hor-card-image-element">
                            <img src="Images/Image${Math.ceil(Math.random() * 12)}.jpg" height="200px" alt="">
                        </div>    
                        <div class="hor-card-image-element">
                            <img src="Images/Image${Math.ceil(Math.random() * 12)}.jpg" height="200px" alt="">
                        </div>    
                          <div class="hor-card-image-element">
                            <img src="Images/Image${Math.ceil(Math.random() * 12)}.jpg" height="200px" alt="">
                        </div>                        
                    </div>
                </div>    
                     `
        });

        //add event listener for the cards after resolving

        this.artistCards = document.getElementsByClassName('artistCard');

        for (let i = 0; i < this.artistCards.length; i++) {
            this.artistCards[i].addEventListener('click', () => {
                location.href = "../ProfilePage/index.html";
            })
        }
    }

    // static selectArtist() {
    //     setTimeout(() => {
    //         console.log(this.artistCards);

    //         for(let i = 0; i < this.artistCards.length; i++){
    //             this.artistCards[i].addEventListener('click',()=>{
    //                 console.log('geh');
    //             })
    //         }

    //         return this.artistCards;
    //     },1000)
    // };
};



Homepage.populateRandomArtists();
// Homepage.selectArtist();

