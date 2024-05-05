
# import gmplot package 
import gmplot 
  
# GoogleMapPlotter return Map object 
# Pass the center latitude and 
# center longitude 
gmap1 = gmplot.GoogleMapPlotter(43.207890, 76.668825, 20) 

43.211022, 76.858282

latitude_list = [ 43.207890, 43.211022 ] 
longitude_list = [ 76.668825, 76.858282 ] 


gmap1.plot(latitude_list, longitude_list,  
           'cornflowerblue', edge_width = 2.5) 


gmap1.draw( "C:\\Users\\Zhkai\\Desktop\\map11.html" ) 
