$(document).ready(function(){
    var nflag=1,eflag=1,sflag=1,mflag=1
    $("#send").attr('disabled',true)
    $("#name").blur(function(){
        var text=$(this).val()
        if(text.length<4)
        {
            nflag=1
            $("#error1").show()
            $("#send").attr('disabled',true)
        }
        else
        {
            $("#error1").hide()
            if(/^[A-Za-z ]+$/.test(text)==true)
            {
                nflag=0
                $("#error2").hide()
                if(nflag==0 && eflag==0 && sflag==0 && mflag==0){
                    $("#send").attr('disabled',false)
                }
            }
            else{
                nflag=1
                $("#error2").show()
                $("#send").attr('disabled',true)
            }
        }
    })
    $("#email").blur(function(){
        var text = $(this).val()
        if (/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(text) == false) {
          $("#error3").show()
          eflag=1
          $("#send").attr('disabled',true)
        }
        else {
          $("#error3").hide()
          eflag=0
          if(eflag==0 && nflag==0 && sflag==0 && mflag==0)
          {
            $("#send").attr('disabled',false)   
          }
        }
    })
    $("#subject").blur(function(){
        var text=$(this).val()
        if(text.length< 1)
        {
            $("#error4").show()
            sflag=1
            $("#send").attr('disabled',true)
        }
        else
        {
            $("#error4").hide()
          sflag=0
          if(eflag==0 && nflag==0 && sflag==0 && mflag==0)
          {
            $("#send").attr('disabled',false)   
          }
        }
    })
    $("#message").blur(function(){
        var text=$(this).val()
        if(text.length< 1)
        {
            $("#error5").show()
            mflag=1
            $("#send").attr('disabled',true)
        }
        else
        {
            $("#error5").hide()
          mflag=0
          if(eflag==0 && nflag==0 && sflag==0 && mflag==0)
          {
            $("#send").attr('disabled',false)   
          }
        }
    })
    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxClh9Am100OsjZVTpj3zHTwZNI_2ItAnLPtgzqU1T-civkSA-btdgnzyWLcCPZ4VYC/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
  
            }
        })
    })
})