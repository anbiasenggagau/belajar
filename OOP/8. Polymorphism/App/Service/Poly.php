<?php 

interface Element{
	public function characteristic();
}

class Water implements Element{
	public function characteristic(){
		return "basah";
	}
}

class Fire implements Element{
	public function characteristic(){
		return 'bakar';
	}
}

class Earth implements Element{
	public function characteristic(){
		return 'keras';
	}
}

class Air implements Element{
	public function characteristic(){
		return 'meniup';
	}
}

function describe (Element $element){
	echo get_class($element);
}

