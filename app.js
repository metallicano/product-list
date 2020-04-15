class Product{
    constructor(name, price, year){
        this.name = name;
        this.price=price;
        this.year=year;

    }

}


class UI {

    add_product(product){

        const product_list = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class = "card-body">
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product year</strong>: ${product.year}
                    <a href = "#" class="btn btn-danger" name = "delete">Delete</a>
                
                </div>
            
            </div>
        
        
        
        `;
        product_list.appendChild(element);

    }

    reset_form(){

        document.getElementById('product-form').reset();
    }

    delete_product(element){
        if (element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.show_message('producto borrado', 'danger');
        }


    }

    show_message(mesage, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mesage));
        const container = document.querySelector(".container");
        const app = document.querySelector("#app");
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();

        },2000);
            

    }


}

document.getElementById('product-form')
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        
       const product = new Product(name, price, year);

       const ui = new UI();
       ui.add_product(product);
       ui.reset_form();
       ui.show_message('producto agregado satisfactoriamente', 'success');

       e.preventDefault();


        

    
});

document.getElementById('product-list').addEventListener('click', function(e){
   
    const ui = new UI();
    ui.delete_product(e.target);
})