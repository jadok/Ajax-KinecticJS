function position(objName,x0,y0,radius,angle)
{
	 obj = self.document.getElementById(objName);
	 newX = x0 + radius * Math.cos(angle);
	 newY= y0 - radius * Math.sin(angle);
	 obj.style.left = newX;
	 obj.style.top = newY;
}


