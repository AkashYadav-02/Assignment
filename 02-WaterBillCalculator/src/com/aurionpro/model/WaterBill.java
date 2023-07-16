package com.aurionpro.model;

public class WaterBill {
	
	private double meter;
	private double bill;
	public WaterBill(double meter) {
	
		this.meter = meter;
		this.bill=75;
	}

	

	public double getBill() {
		return bill;
	}



	


	public double getMeter() {
		return meter;
	}

	public void setMeter(double meter) {
		this.meter = meter;
	}
	
	
	public  void calculate() {
		
		if(this.meter<=100) {
			this.bill+=meter*5;
			this.meter-=100;
		}
		else if(this.meter>100&& this.meter<=250) {
			this.bill+=this.meter*10;
			this.meter-=150;
		}
		else {
			this.bill+=this.meter*20;
			
		}
		
		
	}

}
//output
//Enter the Water meter reading :
//200
//Your water bill is :2075.0
//Want  calculate another  water bill y/n:
//Enter the Water meter reading :
//200
//Your water bill is :2075.0
//Want  calculate another  water bill y/n:
//y
//Enter the Water meter reading :
//400
//Your water bill is :8075.0
//Want  calculate another  water bill y/n:
//n
