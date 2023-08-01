let currentTab = 0;
var price = 0;

showTab(currentTab);
seeProgress(0);

function showTab(n){
    let x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    seeProgress(n);
    

    if(n === 0){
        document.getElementById("prev").style.display = "none";
        document.getElementById("prev-mob").style.display = "none";
    } else {
        document.getElementById("prev").style.display = "inline";
        document.getElementById("prev-mob").style.display = "inline";
    }

    if(n === (x.length - 2))
    {
        document.getElementById("next").innerHTML = "Confirm";
        document.getElementById("next-mob").innerHTML = "Confirm";
    }else{
        document.getElementById("next").innerHTML = "Next Step";
        document.getElementById("next-mob").innerHTML = "Next Step";
    }

    if (n === (x.length - 1))
    {
        document.getElementById("next").style.display = "none";
        document.getElementById("prev").style.display = "none";
        document.getElementById("next-mob").style.display = "none";
        document.getElementById("prev-mob").style.display = "none";
    }
}

function nextPrev(n){
    let x = document.getElementsByClassName("step");
    x[currentTab].style.display = "none";
    // currentTab = currentTab + n;

    // showTab(currentTab);
    // validateEmptyFields_step1();
    if (currentTab === 0){
        if (validateEmptyFields_step1()){
            currentTab = currentTab + n;
            showTab(currentTab);
        }else{
            showTab(currentTab);
        }
    } else{
        if (currentTab === 1){
          if (validate_step2()){
            currentTab = currentTab + n;
            showTab(currentTab);
          }else{
            showTab(currentTab);
          }  
        } else{
            if (currentTab === 2){
                if (validate_step3()){
                    currentTab = currentTab + n;
                    showTab(currentTab);
                } else{
                    showTab(currentTab);
                }
            } else{
                currentTab = currentTab + n;
                showTab(currentTab);
            }
        } 
    }


    // if (validateEmptyFields_step1()){
    //     showTab(currentTab);
    // }else{
    //     currentTab = currentTab - 1;
    //     showTab(currentTab);
    // }

    
    if(currentTab >= 1){
        showplans();
    }
}

function seeProgress(n){
    let prg = document.getElementsByClassName("progress");
    for(i=0; i<prg.length; i++){
        if (i == n || i == n + 4){
            prg[i].style.backgroundColor = "hsl(229, 24%, 87%)";
            prg[i].style.color = "black";
        } else{
            prg[i].style.backgroundColor = "transparent";
            prg[i].style.color = "white";
        }
    }

    if(n == prg.length - 4){
        cont = prg.length - 4;
        prg[cont-1].style.backgroundColor = "hsl(229, 24%, 87%)";
        prg[cont-1].style.color = "black";
        prg[cont+ 3].style.backgroundColor = "hsl(229, 24%, 87%)";
        prg[cont + 3].style.color = "black";
        prg[4].style.color = "white";
        prg[4].style.backgroundColor = "transparent";
    }
}

function validateToggle(){
    const toggle = document.getElementById("toggle");

    if (toggle.checked) {
        console.log("Monthly");
    } else{
        console.log("Yearly");
    }
}

function changePlanSubscription(){
    var plan = document.getElementsByClassName("price");
    const toggle = document.getElementById("toggle");
    var choice = document.getElementsByClassName("check");
    var message = document.getElementsByClassName("message");
    var cost = document.getElementsByClassName("cost");
    var text = document.getElementsByClassName("text");
    var subscription;

    if(toggle.checked){
        subscription = "Yearly";
    } else{
        subscription = "Monthly";
    }
    var teste = "";

    if (subscription == "Yearly")
    {
        plan[0].innerHTML = "$90/yr";  message[0].innerHTML = "2 months free";
        plan[1].innerHTML = "$120/yr";  message[1].innerHTML = "2 months free";
        plan[2].innerHTML = "$150/yr";  message[2].innerHTML = "2 months free";
        cost[0].innerHTML = "+$10/yr";
        cost[1].innerHTML = "+$20/yr";
        cost[2].innerHTML = "+$20/yr";
        text[0].style.color = 'hsl(231, 11%, 63%)';
        text[1].style.color = 'hsl(213, 96%, 18%)';
    }
    else
    {
        if (subscription == "Monthly")
        {
            plan[0].innerHTML = "$9/mo"; message[0].innerHTML = "";
            plan[1].innerHTML = "$12/mo"; message[1].innerHTML = "";
            plan[2].innerHTML = "$9/mo"; message[2].innerHTML = "";
            cost[0].innerHTML = "+$1/mo";
            cost[1].innerHTML = "+$2/mo";
            cost[2].innerHTML = "+$2/mo";
            text[0].style.color = 'hsl(213, 96%, 18%)';
            text[1].style.color = 'hsl(231, 11%, 63%)';
        }
    }}

    function summary()
    {
        const toggle = document.getElementById("toggle");
        var choice = document.getElementsByClassName("check");
        var div_sum = document.getElementsByClassName("div_sum");
        var service_price = document.getElementsByClassName("service_price");
        var plan = document.getElementsByClassName("check3");

        if (toggle.checked)
        {
            if (choice[0].checked)
            {

            }
        }
    }

    function showplans()
    {
        var plan = document.getElementsByClassName("check3");
        var services = document.getElementsByClassName("services");
       var div_sum = document.getElementsByClassName("div_sum");
        var service_price = document.getElementsByClassName("service_price");
        const toggle = document.getElementById("toggle");
        var plan_sum = document.getElementById("plan_sum");
        var choice = document.getElementsByClassName("check");
        var first_plan = "Online Service"; var fr_mo_plan = "+$1/mo"; var fr_yr_plan = "+$10/yr"; 
        var second_plan = "Larger storage"; var snc_mo_plan = "+$2/mo"; var snc_yr_plan = "+$20/yr";
        var third_plan = "Customizable Profile"; var thr_mo_plan = "+$2/mo"; var thr_yr_plan = "+$20/yr";
        var total_price = document.getElementById("tp");
        var label_price = document.getElementById("total_price");
        
  
    if (choice[0].checked)
    {
        if (toggle.checked){
            plan_sum.innerHTML = "Arcade(Yearly)";
            service_price[0].innerHTML = "$90/yr";
            price = 90;
        }else{
            plan_sum.innerHTML = "Arcade(Monthly)";
            service_price[0].innerHTML = "$9/mo";
            price = 9;
        }
    } else{
        if (choice[1].checked)
        {
            if (toggle.checked){
                plan_sum.innerHTML = "Advanced(Yearly)";
                service_price[0].innerHTML = "$120/yr";
                price = 120;
            } else{
                plan_sum.innerHTML = "Advanced(Monthly)";
                service_price[0].innerHTML = "$12/mo";
                price = 12;
            }
        } else{
            if (choice[2].checked){
                if (toggle.checked){
                    plan_sum.innerHTML = "Pro(Yearly)";
                    service_price[0].innerHTML = "$150/yr";
                    price = 150;
                } else{
                    plan_sum.innerHTML = "Pro(Monthly)";
                    service_price[0].innerHTML = "$9/mo";
                    price = 9;
                }
            }
        }
    }

    if ((plan[0].checked && plan[1].checked) && plan[2].checked){
        services[0].innerHTML = first_plan;
        services[1].innerHTML = second_plan;
        services[2].innerHTML = third_plan;
        if (toggle.checked){
            service_price[1].innerHTML = fr_yr_plan;
            service_price[2].innerHTML = snc_yr_plan;
            service_price[3].innerHTML = thr_yr_plan;
            price += (10 + 20 + 20);
        } else{
            service_price[1].innerHTML = fr_mo_plan;
            service_price[2].innerHTML = snc_mo_plan;
            service_price[3].innerHTML = thr_mo_plan;
            price += (1 + 2 + 2);
        }
    } else{
        if ((plan[0].checked && plan[1].checked) && !(plan[2].checked)){
            services[0].innerHTML = first_plan;
            services[1].innerHTML = second_plan;
            services[2].innerHTML = "";
            if (toggle.checked){
                service_price[1].innerHTML = fr_yr_plan;
                service_price[2].innerHTML = snc_yr_plan;
                service_price[3].innerHTML = "";
                price += (10 + 20);
            } else{
                service_price[1].innerHTML = fr_mo_plan;
                service_price[2].innerHTML = snc_mo_plan;
                service_price[3].innerHTML = "";
                price += (1 + 2);
            }
        } else{
            if ((plan[0].checked && !(plan[1].checked)) && !(plan[2].checked)){
                services[0].innerHTML = first_plan;
                services[1].innerHTML = "";
                services[2].innerHTML = "";
                if (toggle.checked){
                    service_price[1].innerHTML = fr_yr_plan;
                    service_price[2].innerHTML = "";
                    service_price[3].innerHTML = "";
                    price += 10;
                } else{
                    service_price[1].innerHTML = fr_mo_plan;
                    service_price[2].innerHTML = "";
                    service_price[3].innerHTML = "";
                    price += 1;
                }
            } else{
                if ((!(plan[0].checked) && plan[1].checked) && plan[2].checked){
                    services[0].innerHTML = second_plan;
                    services[1].innerHTML = third_plan;
                    services[2].innerHTML = "";
                    if (toggle.checked){
                        service_price[1].innerHTML = snc_yr_plan;
                        service_price[2].innerHTML = thr_yr_plan;
                        service_price[3].innerHTML = "";
                        price += (20 + 20);
                    } else{
                        service_price[1].innerHTML = snc_mo_plan;
                        service_price[2].innerHTML = thr_mo_plan;
                        service_price[3].innerHTML = "";
                        price += (2 + 2);
                    }
                }
                else{
                    if ((!(plan[0].checked) && !(plan[1].checked)) && plan[2].checked){
                        services[0].innerHTML = third_plan;
                        services[1].innerHTML = "";
                        services[2].innerHTML = "";
                        if (toggle.checked){
                            service_price[1].innerHTML = thr_yr_plan;
                            service_price[2].innerHTML = "";
                            service_price[3].innerHTML = "";
                            price += 20;
                        } else{
                            service_price[1].innerHTML = thr_mo_plan;
                            service_price[2].innerHTML = "";
                            service_price[3].innerHTML = "";
                            price += 2;
                        }
                    } else{
                        if ((plan[0].checked && !(plan[1].checked)) && plan[2].checked){
                            services[0].innerHTML = first_plan;
                            services[1].innerHTML = "";
                            services[2].innerHTML = third_plan;
                            if (toggle.checked){
                                service_price[1].innerHTML = fr_yr_plan;
                                service_price[2].innerHTML = "";
                                service_price[3].innerHTML = thr_yr_plan;
                                price += (10 + 20);
                            } else{
                                service_price[1].innerHTML = fr_mo_plan;
                                service_price[2].innerHTML = "";
                                service_price[3].innerHTML = thr_mo_plan;
                                price += (1 + 2);
                            }
                    } else{
                        if ((!(plan[0].checked) && plan[1].checked) && !(plan[2].checked)){
                            services[0].innerHTML = second_plan;
                            services[1].innerHTML = "";
                            services[2].innerHTML = "";
                            if (toggle.checked){
                                service_price[1].innerHTML = snc_yr_plan;
                                service_price[2].innerHTML = "";
                                service_price[3].innerHTML = "";
                                price += 20;
                            } else{
                                service_price[1].innerHTML = snc_mo_plan;
                                service_price[2].innerHTML = "";
                                service_price[3].innerHTML = "";
                                price += 2;
                            }
                    }
                }

            }
        }
    }


    }

}
    if(toggle.checked)
    {
        label_price.innerHTML = "Total(per year)";
        total_price.innerHTML = "+$"+price+"/yr";
    }
    else{
        label_price.innerHTML = "Total(per month)";
        total_price.innerHTML = "+$"+price+"/mo";
    }
    }

    function validateEmptyFields_step1(){
        const personal_data = document.getElementsByClassName("personal_data");
        var error_message = document.getElementsByClassName("error_msg");
        var return_value = true;

        for (i = 0; i < personal_data.length; i++)
        {
            if (personal_data[i].value === "")
            {
                error_message[i].innerHTML = "This field is required";
                error_message[i].style.color = "red";
                personal_data[i].style.borderColor = "red";
                return_value = false;
            } else{
                error_message[i].innerHTML = "";
                // error_message[i].style.color = "red";
                personal_data[i].style.borderColor = "hsl(0, 0%, 86%)";
            }
        }

        return return_value;
    }

    function validateData_step1()
    {
        
    }

    function validate_step2(){
        var return_value = true;
        var plan = document.getElementsByClassName("check");
        var cont = 0;

       for (i = 0; i < plan.length; i++){
        if (plan[i].checked){
            cont++;
        }
       }

       if (cont === 0){
        return_value = false;
       }
       return return_value;
    }

    function validate_step3(){
        var return_value = true;
        var plan_services = document.getElementsByClassName("check3");
        var cont = 0;

       for (i = 0; i < plan_services.length; i++){
        if (plan_services[i].checked){
            cont++;
        }
       }

       if (cont === 0){
        return_value = false;
       }
       return return_value;
    }

    function changeColorOnChecked(){
        var checkbox = document.getElementsByClassName("check3");
        var label = document.getElementsByClassName("checkbox");

        for (i = 0; i < label.length; i++)
        {
            if (checkbox[i].checked)
            {
                label[i].style.backgroundColor = 'hsl(217, 100%, 97%)';
                label[i].style.borderColor = 'hsl(243, 100%, 62%)';
            }
            else{
                label[i].style.backgroundColor = 'transparent';
                label[i].style.borderColor = 'hsl(229, 24%, 87%)';
            }
        }
    }

    function changeDiv(){
        let body = document.getElementsByName("body");
        if (body.style.width == 500){
            body.style.backgroundColor = 'red';
        }
        
    }
    // function changeDiv02(){

    // }



