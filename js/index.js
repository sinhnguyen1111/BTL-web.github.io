//Cuộn trang
$(window).scroll(function(){
		var top = $('html').scrollTop();
			if(top>500)
			{
				$('.top').show();
			}
			else{
				$('.top').hide();
			}
		});
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop:0},1000);
	})
	//validate form
	$('#send').on('click',function(e){
		// e.preventDefault();
		$('#user').focusout();
		$('#password').focusout();
		alert('Đăng nhập thành công! Hãy đặt hàng để thưởng thức hương vị bánh cùng Tiệm bánh đại chiến.');

	});

	$(document).ready(function(){
		$('#msg_user').hide();
		$('#msg_password').hide();

		$('#user').focusout(function(){
			var $username = $('#user').val();
			if($username == '' || $username==null)
			{
				$('#msg_user').text('Tên không được để trống.');
				$('#msg_user').css('color','red');

				$('#msg_user').show();
			}
			else if($username.length<5 || $username.length>20)
			{
				$('#msg_user').text('Tên không được nhỏ hơn 5 và độ dài lớn hơn 20 kí tự');
				$('#msg_user').css('color','red');

				$('#msg_user').show();
			}
			else{
				$('#msg_user').text('Vaild.');
				$('#msg_user').css('color','green');
			}
		});
		$('#password').focusout(function(){
			var $passW = $('#password').val();
			if($passW =='' || $passW==null)
			{
  				$('#msg_password').text("Mật khẩu không được để trống!");
  				$('#msg_password').css('color','red');

  				$('#msg_password').show();

			}
			else if($passW.length<5 || $passW.length>20){
				$('#msg_password').text("Mật khẩu không được nhỏ hơn 8 và lớn hơn20!");
  				$('#msg_password').css('color','red');

  				$('#msg_password').show();
			}
			else{
				$('#msg_password').text('Vaild.');
				$('#msg_password').css('color','green');
			}
		});

	});
