import logINput from '../fixtures/TestZootopia.json'

describe('TestZootopia/Final HomeWork', () => {

  beforeEach(() => {

    cy.visit('https://zootopia.ge/en');
    cy.wait(7000) // wait for 70 seconds
    cy.viewport(1200, 1000)

  })


  it('Case#1 Registration', () => {

    // 1. Launch the browser.  
    // 2. Navigate to the URL 'https://zootopia.ge/en'.  
    // 3. Verify that home page is visible successfully.  
    cy.get('body').should('be.visible')

    // 4. Verify that the "Register" button located at the bottom of the page is visible. 
    // 5. Verify that user can access the registration page by clicking on "Register". 
    cy.get('.fo-menu > :nth-child(6) > a').should('be.visible').click()

    // 6. Verify that input fields for Name Surname, E-mail, Personal ID, Phone, Password and Confirm password are visible.  
    // 7. Fill in the details for Name Surname, E-mail, Personal ID, Phone, Password and Confirm password with valid data.  
    let random = Math.random()
    let email = "js" + random + "@gmail.com"
    let personalID = Math.floor(random * Math.pow(10, 11))
    let phone = Math.floor(Math.random() * Math.pow(10, 9))

    cy.get('[name="first_name"]').should('be.visible').type('Jane Smith')
    cy.get('[name="reg_email"]').should('be.visible').type(email)
    cy.get('[name="personal_id"]').should('be.visible').type(personalID)
    cy.get('[name="phone"]').should('be.visible').type(phone)
    cy.get('[name="reg_password"]').should('be.visible').type(random)
    cy.get('[name="reg_password_confirmation"]').should('be.visible').type(random)

    // Verify that the "I agree To terms and conditions" checkbox is visible.
    // 9. Select the checkbox for "I agree To terms and conditions".  
    cy.get('.etx').click({ force: true })

    // 10. Click on the "Register" button.  
    cy.get('.regsub').click()

    //Click on 'GO HOME'
    cy.get('.bg-transparent').click()

  })



  it('Case#2 Login/Authorization', () => {

    // 1. Launch the browser.  
    // 2. Navigate to the URL 'https://zootopia.ge/en'.  
    // 3. Verify that home page is visible successfully.  
    cy.get('body').should('be.visible')

    cy.log(logINput) //Imported logIn inputs from Fixtures/TestZootopia
    cy.login(logINput.email, logINput.password)    //New Command for TestZootopia

    // // 9. Verify that the user has successfully logged in.  
    // // 10. Verify that the instead of "Log in" located at the top right side of the web page, "My page" is visible (as a result of successful login). 
    cy.get('.srch-cart-prof > .iprof').contains('My page').click()

  })



  it('Case#3 Search Functionality Searching with valid keywords', () => {

    // 1. Launch the browser. 
    // 2. Navigate to the URL 'https://zootopia.ge/en'.
    // 3. Verify that home page is visible successfully.  
    cy.get('body').should('be.visible')

    // 4. Verify that the "Search" button, located at the top right side of the page, is visible.  
    // 5. Click on the "Search" button.  
    cy.get('.isearch').should('be.visible').click()

    // 6. Verify that by clicking on the "Search" button causes the search input field to appear. 
    // 7. Type "Cat toy" into the search input field and click on "Search". 
    cy.get('.srch2-inp').should('be.visible').type('Cat toy')
    cy.get('button > img').click()

    // 8. Verify that the search page will open, and all products containing the text "Cat toy" are visible.  
    // 9. Verify that the number of "Found results" is visible.
    cy.get('.search-sul').should('be.visible')

  })



  it('Case#4 Add items to Cart by using "shopping cart" icon', () => {

    // 1.	Launch the browser. 
    // 2.	Navigate to the URL 'https://zootopia.ge/en'.  
    // 4.	Verify that home page is visible successfully.   
    cy.get('body').should('be.visible')

    // 5.	Verify that you are logged in by ensuring that the "My page" located at the top right side of the page is visible. 
    cy.login(logINput.email, logINput.password)
    cy.get('a.iprof').contains('My page').should('be.visible')

    // 6.	Verify that the "Search" button, located at the top right side of the page, is visible.  
    // 7.	Click on the "Search" button.  
    // 8.	Verify that clicking on the "Search" button reveals the input field.  
    // 9.	Type "Cat toy" into the search input field and click on "Search".
    // 10.	Verify that the search page will open, and all products containing the text "Cat toy" are visible.
    cy.get('.isearch').should('be.visible').click()
    cy.get('.srch2-inp').should('be.visible').type('Cat toy')
    cy.get('button > img').click()
    cy.get('.product-list').contains('CAT TOY').should('be.visible')

    // 11.	Add 4 random items to the cart by clicking the "shopping cart" icon at the bottom right of the searched item. 
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    cy.get(':nth-child(2) > .price-cart > .product-cart').click()
    cy.get(':nth-child(3) > .price-cart > .product-cart').click()
    cy.get(':nth-child(4) > .price-cart > .product-cart').click()

    // 12.	Verify that the "shopping Cart", located at the top right side of the page, displays the number four (4) as a result of adding four (4) items to the cart.  
    // 13.	Click on the "shopping Cart" button, located at the top right side of the page. 
    // 14.	Verify that upon opening the shopping cart page, there are four (4) items displayed in it.  
    cy.get('.icart > #cart-items-count').should('be.visible')
    cy.get('.icart').click()
    cy.get('.cart-list').should('be.visible')

  })



  it('Case#5 Update item quantity to Cart by using plus and minus buttons', () => {

    // 1.	Launch the browser. 
    // 2.	Navigate to the URL 'https://zootopia.ge/en'. 
    // 3.	Verify that home page is visible successfully.  
    // 4.	Verify that you are logged in by ensuring that the "My page" located at the top right side of the page is visible.    
    cy.get('body').should('be.visible')
    cy.login(logINput.email, logINput.password)
    cy.get('a.iprof').contains('My page').should('be.visible')

    // 5.	Verify that the animal product block is visible on the main page.
    cy.get('.iblock3').should('be.visible')

    // 6.	Click on the "See products" button in the bird section.
    cy.get('.tutiyushi > .tLink').click()

    // 7.	Verify that a new page opens with products for birds.
    // 8.	Add seven (7) random items to the cart by clicking the "shopping cart" icon located at the bottom right corner of the product.
    cy.get(':nth-child(3) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(12) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(14) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(29) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(7) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(8) > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(16) > .price-cart > .product-cart > p').click()

    // 9. Verify that the shopping cart, located at the top right side of the page is visible.
    // 10. Click on the "Shopping Cart" button. 
    cy.get('.icart').should('be.visible').click()

    // 11. Verify that the shopping cart page opens and there are seven (7) items displayed in it.
    cy.get('.cart-item').its('length').should('eq', 7)

    // 12. Verify that each item has minus ('-') and plus ('+') buttons at the bottom of it.  
    cy.get('.cart-list').find('.minus.change-qty-by-one, .plus.change-qty-by-one').should('be.visible')

    // 13. Click on the plus ('+') button of the 1st, 2nd, 4th, 6th, and 7th item.  
    cy.get('.cart-list').find(':nth-child(1) > .spinner > .plus').click()
    cy.get('.cart-list').find(':nth-child(2) > .spinner > .plus').click()
    cy.get('.cart-list').find(':nth-child(4) > .spinner > .plus').click()
    cy.get('.cart-list').find(':nth-child(6) > .spinner > .plus').click()
    cy.get('.cart-list').find(':nth-child(7) > .spinner > .plus').click()

    // 14. Verify that the quantity of the 1st, 2nd, 4th, 6th, and 7th item has increased.  
    cy.get('input[type="text"]').should('be.visible')

    // 15. Verify that the shopping cart, located at the top right side of the page is visible.
    // 16. Click on the "Shopping Cart" button. 
    cy.get('.icart').should('be.visible').click()

    // 17. Click on the minus ('-') button of the 1st, 2nd, 3rd, 4th, 5th, 6th, and 7th item.
    cy.get(':nth-child(2) > .spinner > .minus').click()
    cy.get(':nth-child(3) > .spinner > .minus').click()
    cy.get(':nth-child(4) > .spinner > .minus').click()
    cy.get(':nth-child(5) > .spinner > .minus').click()
    cy.get(':nth-child(6) > .spinner > .minus').click()
    cy.get(':nth-child(7) > .spinner > .minus').click()

  })



  it('Case#6 Delete items from Cart by using "delete" icon', () => {

    // 1.	Launch the browser. 
    // 2.	Navigate to the URL 'https://zootopia.ge/en'.  
    // 4.	Verify that home page is visible successfully.   
    cy.get('body').should('be.visible')

    // 5.	Verify that you are logged in by ensuring that the "My page" located at the top right side of the page is visible. 
    cy.login(logINput.email, logINput.password)
    cy.get('a.iprof').contains('My page').should('be.visible')

    // 5.	Verify that the animal product block is visible on the main page.
    // 6.	Click on the "See products" button in the fish section.
    cy.get('.iblock3').should('be.visible')
    cy.get('.tevzi > .tLink').click()

    // 7.	Verify that a new page opens with products for fishes.
    // 8.	Add three (3) random items to the cart by clicking the "shopping cart" icon located at the bottom right corner of the product.
    cy.get(':nth-child(8) > .price-cart > .product-cart').click()
    cy.get(':nth-child(11) > .price-cart > .product-cart').click()
    cy.get(':nth-child(19) > .price-cart > .product-cart').click()

    // 9.	Verify that the shopping cart, located at the top right side of the page is visible.
    // 10.	Click on the "Shopping Cart" button. 
    cy.get('.icart').should('be.visible').click()

    // // 11.	Verify that the shopping cart page opens, displaying added items in it.  
    cy.get('.main-cart').should('be.visible')

    // 12.	Verify that each item has a "delete" icon, positioned at the top right side of the item. 
    // 13.	Click on the "delete" icon of the 1st, 2nd, and 3rd item.  
    cy.get(':nth-child(1) > .clear > a').click()
    cy.get(':nth-child(2) > .clear > a').click()

    // 15.	Verify that the "shopping Cart", located at the top right side of the page is visible and displays number one (1) as a result of deleting the items from the cart.  
    cy.get('.icart > #cart-items-count').its('length').should('eq', 1)

  })



})

