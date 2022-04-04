/**
 * @author minks
 */

$(function() {
    var win_width = $(window).width() + 17;
    var win_height = $(window).height();
	var login_height = (win_height - 326) / 2;
    var recode_first_height = $(".record_area>div.content_txt .content_sub_txt").eq(0).height();
    var recode_second_height = $(".record_area>div.content_txt .content_sub_txt").eq(1).height();
	
    //로그인 중앙정렬
	if ($(".login_area").length > 0) {
		$(".login_area").css("margin-top",login_height + "px");
	}
    
    //주요공익실적 첫줄정렬
    if ($(".record_area").length > 0) {
        if (win_width > 900) {
            if (recode_first_height > recode_second_height) {
                recode_first_height = recode_first_height + 10;
                $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height",recode_first_height + "px");
                $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height",recode_first_height + "px");
            } else {
                recode_second_height = recode_second_height + 10;
                $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height",recode_second_height + "px");
                $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height",recode_second_height + "px");
            }
        } else {
            $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height","auto");
            $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height","auto");
        }
    }
    
    //메인 중앙정렬
    if ($(".index_div").length > 0) {
    	$(".swiper-container-main>.swiper-wrapper>.swiper-slide").each(function() {
    		var main_height = 0;
    		var slide_height = $(this).innerHeight();
    		var child_height = $(this).children("section").innerHeight();
    		
    		if (slide_height > child_height) {
    			main_height = (slide_height - child_height) / 2;
    		}
    		
    		$(this).children("section").css("margin-top",main_height + "px");
    	});
    	
        mainChange(1);
    }
	
	//리사이즈
	$(window).resize(function() {
        //초기화
        $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height","auto");
        $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height","auto");
        $(".swiper-container-main>.swiper-wrapper>.swiper-slide section").css("margin-top","0");
        
        win_width = $(window).width() + 17;
		win_height = $(window).height();
		login_height = (win_height - 326) / 2;
        recode_first_height = $(".record_area>div.content_txt .content_sub_txt").eq(0).height();
        recode_second_height = $(".record_area>div.content_txt .content_sub_txt").eq(1).height();
		
		if ($(".login_area").length > 0) {
			$(".login_area").css("margin-top",login_height + "px");
		}
        
        if ($(".record_area").length > 0) {
            if (win_width > 900) {
                if (recode_first_height > recode_second_height) {
                    recode_first_height = recode_first_height + 10;
                    $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height",recode_first_height + "px");
                    $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height",recode_first_height + "px");
                } else {
                    recode_second_height = recode_second_height + 10;
                    $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height",recode_second_height + "px");
                    $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height",recode_second_height + "px");
                }
            } else {
                $(".record_area>div.content_txt .content_sub_txt").eq(0).css("height","auto");
                $(".record_area>div.content_txt .content_sub_txt").eq(1).css("height","auto");
            }
        }
        
        if ($(".index_div").length > 0) {
	    	$(".swiper-container-main>.swiper-wrapper>.swiper-slide").each(function() {
	    		var main_height = 0;
	    		var slide_height = $(this).innerHeight();
	    		var child_height = $(this).children("section").innerHeight();
	    		
	    		if (slide_height > child_height) {
	    			main_height = (slide_height - child_height) / 2;
	    		}
	    		
	    		$(this).children("section").css("margin-top",main_height + "px");
	    	});
	    }
	});
	
	//상위 메뉴 밑의 하위 메뉴 보이기&숨기기
	$('nav.nav').on("mouseover", function(evt) {
		evt.preventDefault();
        var className = ($('nav.nav .top_menu>li:hover').attr("class") != undefined) ? $('nav.nav .top_menu>li:hover').attr("class") : $('nav.nav').attr("child_class");
        $('nav.nav').attr("child_class", className);
        $('aside.aside .top_menu_item').css("display","none");
        $('aside.aside .top_menu_item[nav_type="' + className + '"]').css("display","block");
        $('aside.aside').stop(true,true).slideDown(200);
	});
	
	$('nav.nav').on("mouseleave", function(evt) {
		evt.preventDefault();
        $('nav.nav').attr("child_class", "");
        $('aside.aside').stop(true,true).slideUp(200);
	});
	
	$('.mb_area .nav_menu li .nav_menu_tit').click(function() {
		if ($(this).next('ul').css("display") == "block") {
			$(this).parent().children('.nav_sub_menu').slideUp();
			$(this).removeClass('rotate');
			return false;
		} else {
            if ($(this).parent().parent('.nav_sub_menu').length > 0) {
                $('.nav_sub_menu').not($(this).parents('.nav_sub_menu')).slideUp();
                $('.mb_area .nav_menu li .nav_menu_tit').not($(this).parents('.nav_sub_menu').prev('.nav_menu_tit')).removeClass('rotate');
            } else {
                $('.nav_sub_menu').slideUp();
                $('.mb_area .nav_menu li .nav_menu_tit').removeClass('rotate');
            }
            
            $(this).parent().children('.nav_sub_menu').slideDown();
            $(this).addClass('rotate');
			return false;
		}
	});
	
	//모바일 슬라이드 메뉴 보이기&숨기기
	$('.mb_area .mb_btn').click(function() {
		if ($('.mb_area .mb_menu').css("display") == "none") {
			$('.mb_area .mb_menu').css('display','block');
			$('.mb_area .mb_menu').css('z-index','999');
			$('.mb_area .mb_box').css('right','0px');
			$('.mb_area .line1').addClass('line11');
			$('.mb_area .line2').addClass('line22');
			$('.mb_area .line3').addClass('line33');
			//$('body').css('overflow','hidden');
		} else {
			$('.mb_area .mb_menu').css('display','none');
			$('.mb_area .mb_menu').css('z-index','-1');
			$('.mb_area .mb_box').css('right','-300px');
			$('.mb_area .line1').removeClass('line11');
			$('.mb_area .line2').removeClass('line22');
			$('.mb_area .line3').removeClass('line33');
			//$('body').css('overflow','scroll');
		}
	});
    
    //swiper 이미지 슬라이드 (메인세로)
	/*var swiper = new Swiper('.swiper-container-main', {
        direction: 'vertical',
		observer: true,
		observeParents: true,
		slidesPerView : 1,
        //mousewheel: true,
        pagination: {
            el: $('.swiper-container-main').children('.swiper-pagination'),
            clickable: true,
            renderBullet: function (index, className) {
                if (index == 0) {
                    return '<span class="' + className + '"><span class="spb_index">Main</span></span>';
                } else {
                    return '<span class="' + className + '"><span class="spb_index">0' + (index + 1) + '</span></span>';
                }
            },
        },
		watchOverflow: true,
        on: {
            transitionStart: function(event) {
                mainChange("");
            }
        }
	});*/
	
	//swiper 이미지 슬라이드 (메인가로)
	$(".swiper-container-main2").each(function(index, element) {
		var $this = $(this);
		$this.addClass('instance-' + index);
		
		var swiper = new Swiper('.instance-' + index, {
			observer: true,
			observeParents: true,
			slidesPerView : 1,
			navigation: {
				prevEl: $('.instance-' + index).children().children().children().children().children('.slide_btn_prev'),
				nextEl: $('.instance-' + index).children().children().children().children().children('.slide_btn_next'),
			},
            pagination: {
                el: $('.instance-' + index).children('.slide_pagination'),
                clickable: true,
                renderBullet: function (index2, className) {
                    var spb_title = $('.instance-' + index).children('.slide_pagination').attr("spb_title");
                    
                    if (spb_title != "" && spb_title != null && spb_title != undefined) {
                        var spb_title_arr = spb_title.split('|');

                        for (var i in spb_title_arr) {
                            if (index2 == i) {
                                return '<span class="' + className + '">' + spb_title_arr[i] + '</span>';
                            }
                        }
                    }
                },
            },
			watchOverflow: true
		});
	});
    
    //메인 게시판 내용 변경
    $(".index_div .index_area4 .index_board_menu>li").bind("click", function() {
        var board_type = $(this).attr("board_type");
        $(".index_div .index_area4 .index_board_menu>li").removeClass("active");
        $(".index_div .index_area4 .index_board_con").css("display","none");
        $(this).addClass("active");
        $(".index_div .index_area4 #" + board_type).css("display","block");
    });
    
    $(".index_div .index_area4 .index_board_menu>li").eq(0).trigger("click");
    
    //이용약관 전체체크
    $("#chk_all").click(function() {
        if ($("#chk_all").is(":checked")) {
            $("#chk_agreement").prop("checked", true);
            $("#chk_agreement2").prop("checked", true);
        } else {
            $("#chk_agreement").prop("checked", false);
            $("#chk_agreement2").prop("checked", false);
        }
    });
    
    $(".content_chkbox input[type='checkbox']").change(function() {
        if ($(this).is(":checked")) {
            $(this).next().addClass("checked_img");
        } else {
            $(this).next().removeClass("checked_img");
        }
    });
});

//로그인 유효체크
function loginSubmit() {
    if (!$("#login_id").val()) {
        alert("아이디를 입력해주세요.");
        return false;
    } else if (!$("#login_pw").val()) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    
    return true;
}

//이용약관 체크확인
function agreementSubmit() {
    if ($("#chk_agreement").is(":checked") && $("#chk_agreement2").is(":checked")) {
        return true;
    } else {
        alert("이용약관에 동의해주세요.");
        return false;
    }
}

//회원가입 유효체크
function memberSubmit() {
    if (!$("#member_id").val()) {
        alert("아이디를 입력해주세요.");
        return false;
    } else if (!$("#member_pw").val() || !$("#member_repw").val()) {
        alert("비밀번호를 입력해주세요.");
        return false;    
    } else if ($("#member_pw").val() != $("#member_repw").val()) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    } else if (!$("#member_name").val()) {
        alert("이름을 입력해주세요.");
        return false;     
    } else if (!$("#member_birth").val() || !$(".sel_birth").val() || !$("#member_birth_day").val()) {
        alert("생년월일을 입력해주세요.");
        return false;       
    } else if (!$("#member_email").val()) {
        alert("이메일을 입력해주세요.");
        return false;       
    } else if (!$(".sel_phone").val() || !$("#member_phone").val()) {
        alert("휴대전화를 입력해주세요.");
        return false;       
    }
    
    return true;
}

//메인 슬라이드시 메뉴디자인 변경
function mainChange(index_num) {
    /*if (index_num == "" || index_num == null || index_num == undefined) {
        index_num = $(".index_div>.swiper-wrapper>.swiper-slide-active").index() + 1;
    }*/
    $(".index_div.swiper-container-main>.swiper-pagination>.swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
	$(".index_div.swiper-container-main>.swiper-pagination>.swiper-pagination-bullet").eq(index_num - 1).addClass("swiper-pagination-bullet-active");
    
    if (index_num == 1 || index_num == 5) {
        $("header.header").addClass("main_change");
        $("header.header .header_left a img").attr("src","img/top_logo.png");
        $(".mb_area").addClass("main_change");
        $(".mb_area .header_center a img").attr("src","img/top_logo.png");
        $(".index_div").addClass("main_change");
    } else if (index_num == 3) {
    	$("header.header").removeClass("main_change");
        $("header.header .header_left a img").attr("src","img/top_logo2.png");
        $(".mb_area").removeClass("main_change");
        $(".mb_area .header_center a img").attr("src","img/top_logo2.png");
        $(".index_div").addClass("main_change");
    } else {
        $("header.header").removeClass("main_change");
        $("header.header .header_left a img").attr("src","img/top_logo2.png");
        $(".mb_area").removeClass("main_change");
        $(".mb_area .header_center a img").attr("src","img/top_logo2.png");
        $(".index_div").removeClass("main_change");
    }
}

