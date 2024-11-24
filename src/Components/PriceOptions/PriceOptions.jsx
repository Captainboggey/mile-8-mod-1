import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions=[
        {
          "id": 1,
          "name": "Starter Plan",
          "price": 
             199.99,
          
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Complimentary water station"
          ]
        },
        {
          "id": 2,
          "name": "Active Plan",
          "price": 
            399.99
          ,
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Group fitness classes",
            "Monthly wellness seminar access"
          ]
        },
        {
          "id": 3,
          "name": "Pro Plan",
          "price": 
             599.99,
          
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Unlimited group fitness classes",
            "One personal training session per month",
            "Sauna access"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 899.99,
          
          "features": [
            "Access to gym equipment",
            "Locker room facilities",
            "Unlimited group fitness classes",
            "Weekly personal training sessions",
            "Sauna and spa access",
            "Priority class booking",
            "Free towel service"
          ]
        }
      ]
    return (
        <div className="m-12" >
            
                <h2 className="text-5xl">Best Prices in the town</h2>
               <div className="grid md:grid-cols-3 gap-6">
               {
                    priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
                }
            
               </div>
            
        </div>
    );
};

export default PriceOptions;