			//Array of object for give relationship detail to the user
			var obj=[{info:'Perfect Match.',colour:'Red',number:'198',slogen:'You both have a beautiful love life.'},
		    {info:'Love Birds.',colour:'White',number:'209',slogen:'Love is in the air, you both are perfect pair.'},
			{info:'Heer Ranjha.',colour:'Maroon',number:'170',slogen:'You may face challenges, but your partner will always with you in your tough time.'},
			{info:'Rab Ne Banati Jodi.',colour:'NavyBlue',number:'375',slogen:'Your partner loves you but unable to express it.Be calm and try to understand him/her.'},
			{info:'Romeo & Juliet',colour:'Yellow',number:'109',slogen:'Your bonding is strong but coming days are not in your favour.Be strong and boldly face the situation.'},
			{info:'Nobita & Sizuka',colour:'Baby Pink',number:'111',slogen:'You think too much for your partner be calm and enjoy every day of your life with your partner'},
			{info:'Salt & Pepper',colour:'Black',number:'276',slogen:'Your love with your partner is good and your future with him/her is good.'},
			{info:'Tom & Jerry',colour:'Silver',number:'127',slogen:"Love is the most beautiful feeling in this world and you will find this feeling with your perfect one soon."},
			{info:'Laila & Majnu',colour:'DarkBlue',number:'009',slogen:'Your love life is going well and it will be OK in future too.Your miss/mr perfect will be your better half soon.'},
			{info:'Ken & Barbie',colour:'Olive',number:'101',slogen:'Do not think about your love life too much,everything is fine and will be fine in future too.'},
			{info:'Radha Krishna',colour:'Green',number:'200',slogen:'Your partner is too possessive to you and this shows her/his love.Do not be worried about it.'},
			];
			//array for songs
			  const songs = ['song1.mp3','song6.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3','song6.mp3','song7.mp3', 'song8.mp3','song9.mp3','gana1.mp3','gana2.mp3','gana3.mp3'];

  const audioPlayer = document.getElementById('audio-player');
  const audioSource = document.getElementById('audio-source');
			
			/*Function for getting data*/
			function calLove(txtyname,txtydob,txtymale,txtyfemale,txtpname,txtpdob,txtpmale,txtpfemale,txtyrel,txtprel)
			{
			    /*get the object of h4 for display couple data*/
			var coupleData=document.getElementById("displayCoupleData");
				//get data from form..
				var your_name=txtyname.value;
				var part_name=txtpname.value;
				var your_dob=txtydob.value;
				var part_dob=txtpdob.value;
				var your_rel=txtyrel.value;
				var part_rel=txtprel.value;
				//check the radio button of your data field
				if(txtymale.checked )
				{ 
					your_gender=txtymale.value; 
				}
				else
				{
					your_gender=txtyfemale.value; 
				}
				//check the radio button of your partner data field
				if(txtpmale.checked )
				{ 
					part_gender=txtpmale.value; 
				}
				else
				{
					part_gender=txtpfemale.value; 
				}
				//function calling for validation. 
				var valid1=validateForm(your_name,your_rel);
				var valid2=validateForm(part_name,part_rel);
				//function calling for age convertor.
				/*var yourAge=convertAge(your_dob);
				var yourPartnerAge=convertAge(part_dob);*/
				//function calling for fetch unique no.
				var partnerUniqueNo=convertNameIntoNumber(part_name);
				var yourUniqueNo=convertNameIntoNumber(your_name);
				var matchNo=parseInt((parseInt(yourUniqueNo)+parseInt(partnerUniqueNo))/2);
				var genderMatch=your_gender+part_gender;
				//condition for set output for the user..
				if(valid1==true && valid2==true)
				{
				if(matchNo>=1 && matchNo<=5)
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[0].info,obj[1].colour,obj[2].number,obj[3].slogen,95);
						getChart(95,5);
						playSong(songs[10]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[4].info,obj[5].colour,obj[6].number,obj[7].slogen,coupleData);
						getChart(80,20);
						playSong(songs[1]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[2].info,obj[3].colour,obj[4].number,obj[5].slogen,coupleData);
						getChart(70,30);
						playSong(songs[2]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[6].info,obj[7].colour,obj[8].number,obj[9].slogen,coupleData);
						getChart(65,35);
						playSong(songs[0]);
					}
				}
				else if((matchNo>=6 && matchNo<=8))
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[9].info,obj[8].colour,obj[7].number,obj[6].slogen,coupleData,98);
						getChart(98,2);
						playSong(songs[12]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[5].info,obj[4].colour,obj[3].number,obj[2].slogen,coupleData);
						getChart(80,20);
						playSong(songs[4]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[1].info,obj[0].colour,obj[9].number,obj[8].slogen,coupleData);
						getChart(86,14);
						playSong(songs[5]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[1].info,obj[3].colour,obj[5].number,obj[7].slogen,coupleData);
						getChart(80,20);
						playSong(songs[6]);
					}
				}
				else if((matchNo>=9 && matchNo<=11))
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[2].info,obj[4].colour,obj[6].number,obj[8].slogen,coupleData,90);
						getChart(90,10);
						playSong(songs[11]);
					}
					else if(genderMatch='FM')
					{
						showCoupleData(obj[9].info,obj[7].colour,obj[5].number,obj[3].slogen,coupleData);
						getChart(80,20);
						playSong(songs[7]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[0].info,obj[4].colour,obj[8].number,obj[6].slogen,coupleData);
						getChart(68,32);
						playSong(songs[8]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[1].info,obj[2].colour,obj[8].number,obj[9].slogen,coupleData);
						getChart(60,40);
						playSong(songs[9]);
					}
				}
				else if((matchNo>=12 && matchNo<=14))
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[3].info,obj[4].colour,obj[0].number,obj[2].slogen,coupleData);
						getChart(70,30);
						playSong(songs[4]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[3].info,obj[2].colour,obj[5].number,obj[0].slogen,coupleData);
						getChart(80,20);
						playSong(songs[2]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[4].info,obj[8].colour,obj[1].number,obj[5].slogen,coupleData);
						getChart(80,20);
						playSong(songs[7]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[7].info,obj[5].colour,obj[0].number,obj[6].slogen,coupleData);
						getChart(70,30);
						playSong(songs[3]);
					}
				}
	        else if(matchNo>=15 && matchNo<=17)
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[2].info,obj[1].colour,obj[2].number,obj[6].slogen,coupleData,95);
						getChart(95,5);
						playSong(songs[11]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[9].info,obj[4].colour,obj[3].number,obj[3].slogen,coupleData,93);
						getChart(93,7);
						playSong(songs[10]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[4].info,obj[4].colour,obj[4].number,obj[5].slogen,coupleData);
						getChart(80,20);
						playSong(songs[7]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[7].info,obj[4].colour,obj[7].number,obj[2].slogen,coupleData);
						getChart(70,30);
						playSong(songs[2]);
					}
				}
						else if((matchNo>=18 && matchNo<=20))
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[0].info,obj[2].colour,obj[1].number,obj[9].slogen,coupleData);
						getChart(70,30);
						playSong(songs[7]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[2].info,obj[7].colour,obj[3].number,obj[9].slogen,coupleData);
						getChart(60,40);
						playSong(songs[4]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[9].info,obj[0].colour,obj[0].number,obj[1].slogen,coupleData);
						getChart(80,20);
						playSong(songs[0]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[7].info,obj[7].colour,obj[7].number,obj[7].slogen,coupleData);
						getChart(70,30);
						playSong(songs[8]);
					}
				}	
								else if((matchNo>20))
				{
					if(genderMatch=='MF')
					{
						showCoupleData(obj[0].info,obj[2].colour,obj[1].number,obj[9].slogen,coupleData);
						getChart(70,30);
						playSong(songs[7]);
					}
					else if(genderMatch=='FM')
					{
						showCoupleData(obj[2].info,obj[7].colour,obj[3].number,obj[9].slogen,coupleData);
						getChart(60,40);
						playSong(songs[4]);
					}
					else if(genderMatch=='FF')
					{
						showCoupleData(obj[9].info,obj[0].colour,obj[0].number,obj[1].slogen,coupleData);
						getChart(80,20);
						playSong(songs[0]);
					}
					else if(genderMatch=='MM')
					{
						showCoupleData(obj[7].info,obj[7].colour,obj[7].number,obj[7].slogen,coupleData);
						getChart(70,30);
						playSong(songs[8]);
					}
				}
			}
			}
			/*Function for validate form*/
			function validateForm(name,rel)
			{
				//validate name
				result=true;
				if(name==0)
				{
					alert("Name field is required"); 
					result=false;
				}
				//validate religion
				if(rel==0)
				{
					alert("Religion field is required"); 
					result=false;
				}
				return result;
			}
			//Function for extract unique number using user data
			function convertNameIntoNumber(name)
			{
				name=name.toUpperCase();
				var nameNo=name.charCodeAt(0);
				for(x=1;x<name.length;x++)
				{
					ch=name[x];
					if(ch==" ")
					{
						nameNo=nameNo+name.charCodeAt(x+1);
						x++;
					}
					
				}
				//alert(name+" "+gender+" "+nameNo);
				nameNo=parseInt(nameNo/10);
				
				return nameNo;
			}
			//function for pie chart
			function getChart(n1,n2) {
				
				var chart = new CanvasJS.Chart("chartContainer", {
					animationEnabled: true,
					
					
					data: [{
						type: "doughnut",
						startAngle: 0,
						indexLabelFontSize: 17,
						
						dataPoints: [
						{ y: n1, label: "Compatibility Rate" },
						{ y: n2, label: "In-Compatibility Rate" },
						
						
						]
					}]
				});
				chart.render();
				num1=n1;
				num2=n2;
				window.setTimeout('getChart(num1,num2)','4000');
			}
			//function for show couple data
			function showCoupleData(info,colour,number,slogen,coupleData,check)
			{
			    displayCoupleData.style.textAlign="alternate";
			    displayCoupleData.style.color="#ff4da6";
			    coupleData.innerHTML="<font>Nickname:- </font>"+info+" "+"<br><font>Lucky Colour</font>:- "+colour+" "+"<br><font>Lucky Number</font>:- "+number+" "+"<br><font>Prediction</font>:- "+slogen;
				if(check>=90 && check<=100)
				{
			//sweet alert for special couple
			    Swal.fire({
    title: 'Congratulations!',
    text: 'Your compatibility rate is between 90 to 100.',
    icon: 'image', // You can use 'image', 'warning', 'error', 'success', etc.
	background:'#ff3385',//#330000
	color:'white',
	width:350,
    imageUrl: 'image/show5.gif', // Set the path to your image
    imageWidth: 580, // Set the width of the image
    imageHeight: 200, // Set the height of the image
    imageAlt: 'Custom Image', // Alt text for the image
  });
				
				}
		}
		//function for play audio-player
		function playSong(sg) {
    audioSource.src = "image/"+sg;
    audioPlayer.load(); // Reload the audio element to play the new source
    audioPlayer.play();
  }
  /*Function for getting age using dob*/
		/*	function convertAge(dob)
			{
				var day,month,year;
				var arr=dob.split("-");
				var userYear=arr[0];
				var userMonth=arr[1];
				var userDay=arr[2];
				var age=new Date();
				var currentDay=age.getDate();
				var currentMonth=age.getMonth()+1;	
				var currentYear=age.getFullYear();
				
				//alert(currentYear+" "+currentMonth+" "+currentDay);
				if(userDay>currentDay)
				{
					currentDay=parseInt(currentDay)+parseInt(30);
					currentMonth--;
				}
				if(userMonth>currentMonth)
				{
					currentMonth=parseInt(currentMonth)+parseInt(12);
					currentYear--;
				}
				day=currentDay-userDay;
				month=currentMonth-userMonth;
				//alert(month);
				year=currentYear-userYear;
				return year;
			}*/