/**
 * 
 */


function display()
{
	
 var spec = new Five_insu_And_Fund();

 var current = document.getElementById('spec');
 
 var ft = spec.five_tax; 

//alert(spec.getPerFiveTax)
 
 var display = "";
     display += "<table border="+"1"+">";
     
    
     display = display+ ("<tr>" +
                 
                 "<td>       </td>"+
                 "<td>"+spec.name+"</td>"+
                 "<td> company </td> "+
                 
                 "</tr>");
     
    
    for(i=0; i<ft.listLength(); i++)
    	{
    	
    	
    	display = display + ("<tr>" +
                
                "<td>"+ft.list[i].name+"</td>"+
                "<td>"+ft.list[i].emp[0]+"</td>"+
                "<td>"+ft.list[i].emp[1]+"</td> "+
                
                "</tr>");
    	
    	}
    
    display += "</table>";
    
    
    current.innerHTML = display;
    
    
    
    var pre = document.getElementById('total');
    var present = "";
    
     present += "<table border="+"1"+">";
    
     present = present + ("<tr>"+
             
                  "<td> name </td>" +
                  
                  "<td> base salary </td>"+
                  
                  "<td> preformance related salary </td>"+
                  
                  "<td> self-paid insurance </td>"+
                 
                  "<td> company-paid insurance </td>"+
                 
                  "<td> pre-tax income </td>"+
                 
                  "<td>      tax </td>"+
                  
                  "<td> post-tax income </td>"+
    
                   "</tr>"
	)
	
	present = present + ("<tr>"+
			 
			           "<td>"+spec.name+"</td>"+
			          
			           "<td>"+spec.b_salary+"</td>"+
			           
			           "<td>"+spec.p_salary+"</td>"+
			           
			           "<td>"+spec.getPerFiveTax+"</td>"+
			           
			           "<td>"+spec.getComFiveTax+"</td>"+
			          
			           "<td>"+spec.pre_tax+"</td>"+
			         
			           "<td>"+spec.tax+"</td>"+
			        
			           "<td>"+spec.post_tax()+"</td>"+
			        
			           "</tr>");
	
     present += "</table>";
     
     pre.innerHTML = present;
     
	}



function readEmployeeCSV() {
	
	
	var output = ""; 
	var read_file = new ActiveXObject("Scripting.FileSystemObject"); 
	var path = "D:\\employees.CSV"; 

	var input = read_file.OpenTextFile(path); 
	var line; 
	
	var EmployeeList = new ElemList();
	
	var Employee;
	
	while (!input.AtEndOfStream) { line = input.ReadLine(); 
	
	var aux = line.split(",");
	
	output += aux[3]+"\n"; 
	
	Employee = new Employees(aux[0],aux[1],aux[2],aux[3]);
	
	EmployeeList.addElem(aux[0],Employee);
	

	} 

	input.Close(); 

	

	return EmployeeList;
	
}





function ReadRateCategory(){
	
	
	var read_file = new ActiveXObject("Scripting.FileSystemObject"); 
	var path = "D:\\five_insurance_rate.CSV"; 

	var input = read_file.OpenTextFile(path); 
	var line; 
	
	var RateCategoryList = new ElemList();
	
	var RateCategory;
	
	while (!input.AtEndOfStream) { line = input.ReadLine(); 
	
	var aux = line.split(",");
	
	
	
	RateCategory = new RateCategories(aux[0],aux[1],aux[2],aux[3],aux[4],aux[5]);
	
	RateCategoryList.addElem(aux[0],RateCategory);
	
	
	
	} 

	input.Close(); 
	
	
	
	return RateCategoryList;
	
	
}



/*read file performance_related_payment 绩效工资标准*/
function readP_R_pay()
{
	
	var read_file = new ActiveXObject("Scripting.FileSystemObject"); 
	var path = "D:\\performance_related_payment.CSV"; 
	
	var input = read_file.OpenTextFile(path); 
	var line; 
	
	var P_R_pay_List = new ElemList();
	
	var count = 0;

	var type = new Array();
	var com = new Array();
	
	var length;
	
	while (!input.AtEndOfStream) { line = input.ReadLine(); 
	
	var aux = line.split(",");
	
	length = aux.length;
	
	if(count == 0)
		{
		
		for(i=0; i<aux.length; i++)
			{
			type.push(aux[i]);
			
			}
		
		}
	else{
		
		for(i=0; i<aux.length; i++)
		{
			com.push(aux[i]);
			
		}
		
		
	}
	
	
	
	count=count+1;
	}
	
	
	
	for(i=0;i<length;i++)
		{
		
		P_R_pay_List.addElem(type[i],com[i]);
		
		
		
		}

	
	input.Close(); 
	
	
	
	return P_R_pay_List;
	

}



function read_Avg_Wage()
{
	

	
	var read_file = new ActiveXObject("Scripting.FileSystemObject"); 
	var path = "D:\\average monthly wage.CSV"; 
	
	var input = read_file.OpenTextFile(path); 
	var line; 
	
	var Avg_Wage_List = new ElemList();
	
	var count = 0;

	var type = new Array();
	var wage = new Array();
	
	var length;
	
	while (!input.AtEndOfStream) { line = input.ReadLine(); 
	
	var aux = line.split(",");
	
	length = aux.length;
	
	if(count == 0)
		{
		
		for(i=0; i<aux.length; i++)
			{
			type.push(aux[i]);
			
			}
		
		}
	else{
		
		for(i=0; i<aux.length; i++)
		{
			wage.push(aux[i]);
			
		}
		
		
	}
	
	
	
	count=count+1;
	}
	
	
	
	for(i=0;i<length;i++)
		{
		
		Avg_Wage_List.addElem(type[i],wage[i]);
		
		
		
		}

	
	input.Close(); 
	
	
	
	return Avg_Wage_List;
	

	
	}







function read_tax_rate()
{
	

	

	
	var read_file = new ActiveXObject("Scripting.FileSystemObject"); 
	var path = "D:\\personal tax rate.CSV"; 
	
	var input = read_file.OpenTextFile(path); 
	var line; 
	
	var tax_rate_List = new ElemList();
	
	var count = 0;

	var range = new Array();
	var rate = new Array();
	
	var length;
	
	while (!input.AtEndOfStream) { line = input.ReadLine(); 
	
	var aux = line.split(",");
	
	length = aux.length;
	
	if(count == 0)
		{
		
		for(i=0; i<aux.length; i++)
			{
			range.push(aux[i]);
			
			}
		
		}
	else{
		
		for(i=0; i<aux.length; i++)
		{
			rate.push(aux[i]);
			
		}
		
		
	}
	
	
	
	count=count+1;
	}
	
	
	
	for(i=0;i<length;i++)
		{
		
		tax_rate_List.addElem(range[i],rate[i]);
		
	
		
		}

	
	input.Close(); 
	
	
	
	return tax_rate_List;
	

	
	
	
	
	}







function Five_insu_And_Fund()
{

	
	
	var temp = document.calculator.numScreen.value;
	
	
	var emp_list = new readEmployeeCSV();
	
	var per_tax_rate = new read_tax_rate();
	
	var avg_wage = new read_Avg_Wage();
	
	var p_r_pay = new readP_R_pay();
	
	var five_insu = new ReadRateCategory();
	
	
	var spec;
	
	var emp;
	
	if(!emp_list.exist_name(temp))
		{
		document.getElementById("warning").innerHTML="employee do not exist";
		}
	
	else 
		{
		
		for(i=0;i<emp_list.listLength();i++)
		{
		
	      if(emp_list.list[i].name == temp)
	    	  {
	    	  emp = emp_list.list[i].emp;
	    	 
	    	 document.getElementById("warning").innerHTML="";
	    	
	    	  }
	     
	      
		
		}
	
	var wg = avg_wage.list[0].emp;
	
	var base = 0;
	
	var bs; 
	
	if(document.calculator.perScreen.value != "")
		{
		
		  bs = document.calculator.perScreen.value;
	
		
		}else
			{
			
			bs = emp.b_salary;
		
			
			}
		
	
	
	
	if(	bs/wg >= 3)
		{
		base = wg*3;
		}
	else if(wg >= bs*0.6)
		{
		base = wg*0.6;
		}
	else {
		base = bs;
	}
	
	
	
	
	
	var pe;
	
	
	if(document.calculator.pe_Screen.value != "" && (document.calculator.pe_Screen.value).toUpperCase() <= 'D')
		{
		
		document.getElementById("char_warn").innerHTML="";
		pe = (document.calculator.pe_Screen.value).toUpperCase() ;
		
		}
	else if(document.calculator.pe_Screen.value == ""){
		
		document.getElementById("char_warn").innerHTML="";
		pe = emp.p_r_salary;
		
	}else{
		
		document.getElementById("char_warn").innerHTML="performance level do not exist, read from files!";
		pe = emp.p_r_salary;
		
	}
	
	
	
	var ps = 0;
	
	for(i=0 ;i<p_r_pay.listLength();i++)
		{
		 
		if(p_r_pay.list[i].name == pe){
			ps = p_r_pay.list[i].emp;
		
		}

	
	}
	
	
   var h_fund_rate;
   
   if(document.calculator.hf_Screen.value != "" && parseFloat(document.calculator.hf_Screen.value) < 1.0 )
	   {
	   
	   document.getElementById("fraction_warn").innerHTML="";
	   h_fund_rate = document.calculator.hf_Screen.value;
	   
	   }
   else if(document.calculator.hf_Screen.value == "")
	   {
	   
	   document.getElementById("fraction_warn").innerHTML="";
	   h_fund_rate  = emp.h_fund;
	   
	   }else
		   {
		   
		   document.getElementById("fraction_warn").innerHTML="house fund rate exceed 1!";
		   h_fund_rate  = emp.h_fund;
		   
		   }
  
   
  
   
   
   
   var five_tax = new ElemList();
	
   
	
	      var p = new Array();
	      
	      var name_1 = five_insu.list[0].emp.pension_insu;
	      var c_1 = five_insu.list[1].emp.pension_insu*base;
	      var p_1 = five_insu.list[2].emp.pension_insu*base;
	    
	     p.push(p_1);
	      p.push(c_1);
	       five_tax.addElem(name_1,p);
	    
	      
	      
	      
	      
	      
	      var m = new Array();
	  	
	      var name_2 = five_insu.list[0].emp.medical_insu;
	      var c_2 = five_insu.list[1].emp.medical_insu*base;
	      var p_2 = five_insu.list[2].emp.medical_insu*base;
	      
	      m.push(p_2);
	      m.push(c_2);
	      
	      five_tax.addElem(name_2,m);
	     
	      
	      
	      
	      
	      
	      var u = new Array();
	  	
	      var name_3 = five_insu.list[0].emp.unemp_insu;
	      var c_3 = five_insu.list[1].emp.unemp_insu*base;
	      var p_3 = five_insu.list[2].emp.unemp_insu*base;
	      
	      u.push(p_3);
	      u.push(c_3);
	      
	      five_tax.addElem(name_3,u);
	     
		
	
	      
	      var mt = new Array();
		  	
	      var name_4 = five_insu.list[0].emp.maternity_insu;
	      var c_4 = five_insu.list[1].emp.maternity_insu*base;
	      var p_4 = five_insu.list[2].emp.maternity_insu*base;
	      
	      mt.push(p_4);
	      mt.push(c_4);
	      
	      five_tax.addElem(name_4,mt);
	     
	      
	      
	      
	      
	      var oj = new Array();
		  	
	      var name_5 = five_insu.list[0].emp.on_job_injury_insu;
	      var c_5 = five_insu.list[1].emp.on_job_injury_insu*base;
	      var p_5 = five_insu.list[2].emp.on_job_injury_insu*base;
	      
	      
	      oj.push(p_5);
	      oj.push(c_5);
	      
	      five_tax.addElem(name_5,oj);
	     
	     
	      
	      
	      
	     
	      var hf = new Array();
		  	
	      var name_6 = "house_fund";
	      var c_6 = h_fund_rate*base;
	      var p_6 = h_fund_rate*base;
	      
	     c_6 = c_6.toFixed(2);
	     p_6 = p_6.toFixed(2);
	      
	     
	      
	      hf.push(p_6);
	      hf.push(c_6);
	     
	      five_tax.addElem(name_6,hf);
	      
	      
	      
	      
	      var tt = new Array();
		  	
	      var name_7 = "total";
	      
	     
	      
	      var c_7 = parseFloat(c_1)+parseFloat(c_2)+parseFloat(c_3)+parseFloat(c_4)+parseFloat(c_5)+parseFloat(c_6);
	      var p_7 = parseFloat(p_1)+parseFloat(p_2)+parseFloat(p_3)+parseFloat(p_4)+parseFloat(p_5)+parseFloat(p_6);
	      
	      
	      
	      c_7 = c_7.toFixed(2);
	      p_7 = p_7.toFixed(2);
	      
	      
	      tt.push(p_7);
	      tt.push(c_7);
	      
	      five_tax.addElem(name_7,tt);
	     
	      
	      var pre_tax = parseInt(bs)+parseInt(ps)-parseInt(p_7);
	      
	     
	      
	      //per_tax_rate.list[i].
	      
	      
	      var pt_rate = 0;
	      
	     var total = 0;
	      
	      for(i=1,com = pre_tax - 3500; i<per_tax_rate.listLength();i++)
	    	  {
	    	  
	    	  var temp_2 = parseInt(per_tax_rate.list[i].name)
	    	       
	    	        
	    	  if(parseInt(com) <= 0)
	    		  {
	    		  
	    		  break;
	    		  
	    		  }
	    	       
	    	        
	    	        if(com < temp_2)
	 	    	   {
	 	    	   
	    	        	var a = com - parseInt(per_tax_rate.list[i-1].name);
	    	        	var b = a*parseFloat(per_tax_rate.list[i-1].emp);
	    	        	
	    	        	total += b;
	    	        	
	 	    	   break;
	 	    	   
	 	    	   }
	    	  
	    	  var temp = temp_2-parseInt(per_tax_rate.list[i-1].name);
  	        var temp_1 = parseFloat(per_tax_rate.list[i-1].emp);
	    	       
	    	        var pro = temp*temp_1;
	    	        
	    	        total += pro;
	    	        
	    	        
	    	      
	    	 
	    	  
	    	  }
	      
	        total = total.toFixed(2);

	      
	      spec = new income_spec(emp.name,five_tax,bs,ps,pt_rate,p_7,c_7,pre_tax,total);
	      
	     
      
		
		}
	
	
	return spec;
}




function income_spec(name,five_tax,b_salary,p_salary,per_tax_rate,getPerFiveTax,getComFiveTax,pre_tax,tax)
{
	this.name = name;
	
	this.five_tax = five_tax;
	
	this.b_salary = b_salary;
	
	this.p_salary = p_salary;
	
	this.per_tax_rate = per_tax_rate;
	
	this.getPerFiveTax = getPerFiveTax;
	
	
	this.getComFiveTax = getComFiveTax;
	
	this.pre_tax = pre_tax;
	
	
	
	this.tax = tax;
	
	
	
	this.post_tax = function(){
		
		return (parseFloat(this.pre_tax) - parseFloat(this.tax));
	}
	

	
}






function Employees(name, b_salary, p_r_salary, h_fund) {
	
	this.name = name;
	
	this.b_salary = b_salary;
	
	this.p_r_salary = p_r_salary;
	
	this.h_fund = h_fund;
}







function RateCategories(type, p_insu, med_insu, unemp_insu, m_insu, oj_insu )
{
	
	this.type = type;
	
	this.pension_insu = p_insu;
	
	this.medical_insu = med_insu;
	
	this.unemp_insu = unemp_insu;
	
	this.maternity_insu = m_insu;
	
	this.on_job_injury_insu = oj_insu;
	
	}




function ElemList() {
	
	this.list = new Array()
	
	this.listLength = function() {
		return this.list.length;
	} 
	
	
	

	
	
	this.addElem = function(name, Elem) {
		this.list.push(
		{
			name: name,
			
			emp: Elem
		}		
		);
		
	}
	
	this.get = function(name){
		
		try{     
            for(i = 0; i < this.list.length; i++) {     
                if(this.list[i].name == name) {     
                    return this.list[i].emp;     
                }     
            }     
        } catch(e) {     
            return null;     
        }   
		
	}
	
	
	this.exist_name = function(name) {     
        var exist = false;     
        try{     
            for(i = 0; i < this.list.length; i++) {     
                if(this.list[i].name == name) {     
                	exist = true;     
                }     
            }     
        } catch(e) {     
        	exist = false;     
        }     
        return exist;     
    } 
	
	
	
	
}






