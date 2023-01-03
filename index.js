const items = document.querySelectorAll('.item');
//console.log(items);

items.forEach(item => {
   item.addEventListener('mouseover', ()=>{
      removeFocus();
      item.classList.add('clicked');
       })
      removeFocus = () => {
         items.forEach(item => {
            item.classList.remove('clicked')
         })
      }
      })

      const btnCalculate = document.querySelector('#btnCalculate');
      btnCalculate.addEventListener('click', calculateTour);

      function calculateTour(e){
         e.preventDefault();
         const tour = document.querySelector('#tour').value;
         const days = document.querySelector('#addDays').value;
         const people = document.querySelector('#addPeople').value;
         console.log(tour, days, people);

         let priceForTour = tour*days*people;
         let pricePerPerson = priceForTour/people;

         priceForTour = priceForTour.toFixed(2);
         pricePerPerson = pricePerPerson.toFixed(2);

         document.querySelector('#totalPrice').textContent = priceForTour;
         document.querySelector('#tourPricePerPerson').textContent = pricePerPerson;

         document.querySelector('.priceIncludes').style.display = "block";
         document.querySelector('.itinerary').style.display = "block";
      }

