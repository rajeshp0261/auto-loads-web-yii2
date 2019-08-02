"use strict";function toggleRemoveButtonsVisibility(){$(".load-cars-editing-item").length>1?$(".remove-load-car-model").removeClass("hidden"):$(".remove-load-car-model").addClass("hidden")}function toggleRequiredClass(){isPartial($(".IA-C-2.IA-C-3:checked").val())?$(".field-loadcar-model, .field-loadcar-quantity").addClass("required"):$(".field-loadcar-model, .field-loadcar-quantity").removeClass("required")}function togglePriceVisibility(l){void 0==l&&(l=$("#IA-C-4").val()),isForAllLoad(l)?($(".load-price").removeClass("hidden"),$(".car-price").addClass("hidden")):($(".load-price").addClass("hidden"),$(".car-price").removeClass("hidden"))}function toggleQuantityVisibility(l){void 0==l&&(l=$("#IA-C-4").val()),isFull()&&isForCarModel(l)?$(".car-quantity").addClass("hidden"):$(".car-quantity").removeClass("hidden")}function validateQuantity(){var l="#load-editing-form";0==$("#load-editing-form").length&&(l="#load-announcement-form");var a=countCarQuantities();$.each($(".car-quantity select"),function(e){var o="loadcar-"+e+"-quantity";a>QUANTITY_MAX_VALUE?$(l).yiiActiveForm("updateAttribute",o,[TOTAL_QUANTITY_TOO_BIG]):$(l).yiiActiveForm("updateAttribute",o,"")})}function countCarQuantities(){var l=0;return $.each($(".car-quantity select"),function(a,e){l=Number(l)+Number($(e).val())}),l}function toggleEditableLoadElementsStructure(l){void 0==l&&(l=$("#IA-C-4").val()),isForAllLoad(l)?($(".load-payment-method-selection").removeClass("col-xs-12").addClass("col-sm-6"),$(".load-price").addClass("col-sm-6"),isVisibleRemoveCarButton()?($(".car-quantity").removeClass("col-lg-2 col-md-5 col-sm-5 col-md-3 col-sm-3 col-lg-4 col-md-4 col-sm-4 hidden").addClass("col-lg-3 col-md-3 col-sm-3"),$(".car-model, .car-state").removeClass("col-lg-3 col-sm-6").addClass("col-sm-4")):($(".car-quantity").removeClass("col-lg-3 col-md-3 col-sm-3 col-md-6 col-sm-6 hidden").addClass("col-lg-4 col-md-4 col-sm-4"),$(".car-model, .car-state").removeClass("col-lg-3 col-sm-6").addClass("col-sm-4"),$(".car-price").removeClass("col-lg-3 col-sm-6"))):($(".load-payment-method-selection").addClass("col-xs-12").removeClass("col-sm-6"),$(".load-price").removeClass("col-sm-6"),isFull()?isVisibleRemoveCarButton()?$(".car-price").removeClass("col-sm-4 hidden").addClass("col-sm-3"):($(".car-quantity").removeClass("col-sm-4"),$(".car-model, .car-state").removeClass("col-sm-4").addClass("col-sm-4"),$(".car-price").removeClass("col-lg-3 col-md-3 col-sm-3 col-lg-4 col-md-4 col-sm-4 hidden").addClass("col-sm-4")):isVisibleRemoveCarButton()?($(".car-quantity").removeClass("col-lg-3 col-lg-4 col-md-4 col-sm-4 col-md-6 col-md-3 col-sm-3 col-sm-6").addClass("col-lg-2 col-sm-6"),$(".car-model, .car-state").removeClass("col-sm-4").addClass("col-lg-3 col-sm-6"),$(".car-price").removeClass("col-sm-4").addClass("col-lg-3 col-sm-5")):($(".car-quantity").removeClass("col-lg-2 col-md-6 col-sm-6 col-lg-4 col-md-4 col-sm-4").addClass("col-lg-3 col-sm-6"),$(".car-model, .car-state").removeClass("col-sm-4").addClass("col-lg-3 col-sm-6"),$(".car-price").removeClass("col-lg-4 col-md-5 col-sm-5 col-md-4 col-sm-4 hidden").addClass("col-lg-3 col-sm-6")))}function changeElementsVisibility(l){var a=$(l).val();toggleRequiredClass(),togglePriceVisibility(a),toggleQuantityVisibility(a),validateQuantity(),toggleEditableLoadElementsStructure(a)}function printRemainingCharacters(l){var a=$(l).val().length,e=MODEL_MAX_LENGTH-a;a<=MODEL_MAX_LENGTH&&$(l).parent().find(".help-block").text(MODEL_CHARACTERS_LEFT+e)}function isPartial(l){return void 0==l&&(l=LOAD_TYPE),l==TYPE_PARTIAL}function isFull(l){return void 0==l&&(l=LOAD_TYPE),l==TYPE_FULL}function isForCarModel(l){return l==FOR_CAR_MODEL}function isForAllLoad(l){return l==FOR_ALL_LOAD}function isVisibleRemoveCarButton(){return $(".remove-load-car-model").is(":visible")}function isLoadTypeSelected(){return $(".IA-C-2.IA-C-3").is(":checked")}function editLoad(l,a,e){l.preventDefault(),l.stopImmediatePropagation();var o=$("#load-editing-form"),s=o.data("yiiActiveForm");$.each(s.attributes,function(){this.status=2}),o.yiiActiveForm("validate"),$("#load-editing-form").find(".has-error").length||$.pjax({type:"POST",url:appendUrlParams($(e).attr("action")),data:{id:a,data:$(e).serialize()},container:"#my-loads-table-pjax",push:!1,replace:!1,scrollTo:!1}).done(function(){$("#edit-load-modal").modal("hide"),$.pjax.reload({container:"#toastr-pjax"})})}function toggleNewLoadElementsStructure(){var l=$(".IA-C-2.IA-C-3:checked").val(),a=$("#IA-C-4").val();removeNewLoadElementsClasses(),isForCarModel(a)&&($(".load-price-container").addClass("hidden"),$(".field-IA-C-4").removeClass("col-sm-6")),isForAllLoad(a)&&($(".field-IA-C-4").addClass("col-sm-6"),$(".load-price-container").addClass("col-sm-6 col-xs-12")),isVisibleRemoveCarButton()||isLoadTypeSelected()&&!isPartial(l)||!isForCarModel(a)||$(".field-loadcar-quantity, .field-loadcar-model, .field-loadcar-price, .field-loadcar-state").addClass("col-lg-3 col-sm-6"),!isVisibleRemoveCarButton()&&isForAllLoad(a)&&($(".field-loadcar-quantity, .field-loadcar-model, .field-loadcar-state").addClass("col-sm-4"),$(".field-loadcar-price").addClass("hidden")),!isVisibleRemoveCarButton()&&isFull(l)&&isForCarModel(a)&&($(".field-loadcar-quantity").addClass("hidden"),$(".field-loadcar-model, .field-loadcar-price, .field-loadcar-state").addClass("col-sm-4")),isVisibleRemoveCarButton()&&(!isLoadTypeSelected()||isPartial(l))&&isForCarModel(a)&&($(".field-loadcar-quantity, .field-loadcar-model, .field-loadcar-state").addClass("col-lg-3 col-sm-6"),$(".field-loadcar-price").addClass("col-lg-2 col-sm-5")),isVisibleRemoveCarButton()&&isForAllLoad(a)&&($(".field-loadcar-quantity").addClass("col-sm-3"),$(".field-loadcar-model, .field-loadcar-state").addClass("col-sm-4"),$(".field-loadcar-price").addClass("hidden")),isVisibleRemoveCarButton()&&isFull(l)&&isForCarModel(a)&&($(".field-loadcar-quantity").addClass("hidden"),$(".field-loadcar-model, .field-loadcar-state").addClass("col-sm-4"),$(".field-loadcar-price").addClass("col-sm-3"))}function removeNewLoadElementsClasses(){$(".load-unload-city-container").removeClass("col-sm-4 col-lg-3 col-sm-6"),$(".load-date-container").removeClass("col-sm-4 col-lg-3 col-sm-6"),$(".load-price-container").removeClass("hidden col-lg-3 col-sm-6"),$(".field-loadcar-quantity").removeClass("col-lg-2 col-lg-3 col-sm-6 col-sm-4 hidden col-sm-3"),$(".field-loadcar-model").removeClass("col-lg-3 col-sm-6 col-sm-4 col-sm-3"),$(".field-loadcar-price").removeClass("col-lg-3 col-sm-6 hidden col-sm-4 col-lg-2 col-sm-5 col-sm-3"),$(".field-loadcar-state").removeClass("col-lg-3 col-sm-6 col-sm-4")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFubm91bmNlbWVudC9sb2FkLWNhcnMtZWRpdGluZy1mb3JtLmpzIl0sIm5hbWVzIjpbInRvZ2dsZVJlbW92ZUJ1dHRvbnNWaXNpYmlsaXR5IiwiJCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0b2dnbGVSZXF1aXJlZENsYXNzIiwiaXNQYXJ0aWFsIiwidmFsIiwidG9nZ2xlUHJpY2VWaXNpYmlsaXR5IiwicGF5bWVudE1ldGhvZCIsInVuZGVmaW5lZCIsImlzRm9yQWxsTG9hZCIsInRvZ2dsZVF1YW50aXR5VmlzaWJpbGl0eSIsImlzRnVsbCIsImlzRm9yQ2FyTW9kZWwiLCJ2YWxpZGF0ZVF1YW50aXR5IiwiZm9ybUlkIiwicXVhbnRpdGllcyIsImNvdW50Q2FyUXVhbnRpdGllcyIsImVhY2giLCJpbmRleCIsImlkIiwiUVVBTlRJVFlfTUFYX1ZBTFVFIiwieWlpQWN0aXZlRm9ybSIsIlRPVEFMX1FVQU5USVRZX1RPT19CSUciLCJlbGVtZW50IiwiTnVtYmVyIiwidG9nZ2xlRWRpdGFibGVMb2FkRWxlbWVudHNTdHJ1Y3R1cmUiLCJpc1Zpc2libGVSZW1vdmVDYXJCdXR0b24iLCJjaGFuZ2VFbGVtZW50c1Zpc2liaWxpdHkiLCJwcmludFJlbWFpbmluZ0NoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzIiwibGVmdFN5bWJvbHMiLCJNT0RFTF9NQVhfTEVOR1RIIiwicGFyZW50IiwiZmluZCIsInRleHQiLCJNT0RFTF9DSEFSQUNURVJTX0xFRlQiLCJsb2FkVHlwZSIsIkxPQURfVFlQRSIsIlRZUEVfUEFSVElBTCIsIlRZUEVfRlVMTCIsIkZPUl9DQVJfTU9ERUwiLCJGT1JfQUxMX0xPQUQiLCJpcyIsImlzTG9hZFR5cGVTZWxlY3RlZCIsImVkaXRMb2FkIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiJGZvcm0iLCJkYXRhIiwiYXR0cmlidXRlcyIsInRoaXMiLCJzdGF0dXMiLCJwamF4IiwidHlwZSIsInVybCIsImFwcGVuZFVybFBhcmFtcyIsImF0dHIiLCJzZXJpYWxpemUiLCJjb250YWluZXIiLCJwdXNoIiwicmVwbGFjZSIsInNjcm9sbFRvIiwiZG9uZSIsIm1vZGFsIiwicmVsb2FkIiwidG9nZ2xlTmV3TG9hZEVsZW1lbnRzU3RydWN0dXJlIiwicmVtb3ZlTmV3TG9hZEVsZW1lbnRzQ2xhc3NlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFrQkEsU0FBU0EsaUNBQ0RDLEVBQUUsMkJBQTJCQyxPQUFTLEVBQ3RDRCxFQUFFLDBCQUEwQkUsWUFBWSxVQUV4Q0YsRUFBRSwwQkFBMEJHLFNBQVMsVUFPN0MsUUFBU0MsdUJBRURDLFVBRFdMLEVBQUUsMEJBQTBCTSxPQUV2Q04sRUFBRSxpREFBaURHLFNBQVMsWUFFNURILEVBQUUsaURBQWlERSxZQUFZLFlBU3ZFLFFBQVNLLHVCQUFzQkMsT0FDTkMsSUFBakJELElBQ0FBLEVBQWdCUixFQUFFLFdBQVdNLE9BRzdCSSxhQUFhRixJQUNiUixFQUFFLGVBQWVFLFlBQVksVUFDN0JGLEVBQUUsY0FBY0csU0FBUyxZQUV6QkgsRUFBRSxlQUFlRyxTQUFTLFVBQzFCSCxFQUFFLGNBQWNFLFlBQVksV0FTcEMsUUFBU1MsMEJBQXlCSCxPQUNUQyxJQUFqQkQsSUFDQUEsRUFBZ0JSLEVBQUUsV0FBV00sT0FHN0JNLFVBQVlDLGNBQWNMLEdBQzFCUixFQUFFLGlCQUFpQkcsU0FBUyxVQUU1QkgsRUFBRSxpQkFBaUJFLFlBQVksVUFTdkMsUUFBU1ksb0JBQ0wsR0FBSUMsR0FBUyxvQkFDeUIsSUFBbENmLEVBQUUsc0JBQXNCQyxTQUN4QmMsRUFBUywwQkFHYixJQUFJQyxHQUFhQyxvQkFDakJqQixHQUFFa0IsS0FBS2xCLEVBQUUsd0JBQXlCLFNBQVVtQixHQUN4QyxHQUFJQyxHQUFLLFdBQWFELEVBQVEsV0FDMUJILEdBQWFLLG1CQUNickIsRUFBRWUsR0FBUU8sY0FBYyxrQkFBbUJGLEdBQUtHLHlCQUVoRHZCLEVBQUVlLEdBQVFPLGNBQWMsa0JBQW1CRixF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dENGLEVBQUUseUJBQXlCRSxZQUFZLDRCQUV2Q0YsRUFBRSwyQkFBMkJFLFlBQVksdURBQ3pDRixFQUFFLHdCQUF3QkUsWUFBWSx1Q0FDdENGLEVBQUUsd0JBQXdCRSxZQUFZLGdFQUN0Q0YsRUFBRSx3QkFBd0JFLFlBQVkiLCJmaWxlIjoibXktYW5ub3VuY2VtZW50L2xvYWQtY2Fycy1lZGl0aW5nLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxcclxuTE9BRF9UWVBFLFxyXG5UWVBFX1BBUlRJQUwsXHJcblRZUEVfRlVMTCxcclxuUVVBTlRJVFlfTUFYX1ZBTFVFLFxyXG5NT0RFTF9NQVhfTEVOR1RILFxyXG5NT0RFTF9DSEFSQUNURVJTX0xFRlQsXHJcbkZPUl9DQVJfTU9ERUwsXHJcbkZPUl9BTExfTE9BRCxcclxuVE9UQUxfUVVBTlRJVFlfVE9PX0JJRyxcclxubG9hZFBhZ2VcclxuKi9cclxuXHJcbi8qKlxyXG4gKiBUb2dnbGVzIHJlbW92ZSBidXR0b25zIHZpc2liaWxpdHlcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZVJlbW92ZUJ1dHRvbnNWaXNpYmlsaXR5KCkge1xyXG4gICAgaWYgKCQoJy5sb2FkLWNhcnMtZWRpdGluZy1pdGVtJykubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICQoJy5yZW1vdmUtbG9hZC1jYXItbW9kZWwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5yZW1vdmUtbG9hZC1jYXItbW9kZWwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2dnbGVzIGxvYWQgY2FycyBtb2RlbHMgYW5kIHF1YW50aXRpZXMgZWxlbWVudHMgcmVxdWlyZWQgY2xhc3NcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZVJlcXVpcmVkQ2xhc3MoKSB7XHJcbiAgICB2YXIgbG9hZFR5cGUgPSAkKCcuSUEtQy0yLklBLUMtMzpjaGVja2VkJykudmFsKCk7XHJcbiAgICBpZiAoaXNQYXJ0aWFsKGxvYWRUeXBlKSkge1xyXG4gICAgICAgICQoJy5maWVsZC1sb2FkY2FyLW1vZGVsLCAuZmllbGQtbG9hZGNhci1xdWFudGl0eScpLmFkZENsYXNzKCdyZXF1aXJlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuZmllbGQtbG9hZGNhci1tb2RlbCwgLmZpZWxkLWxvYWRjYXItcXVhbnRpdHknKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZXMgbG9hZCBwcmljZSBhbmQgbG9hZCBjYXJzIHByaWNlcyBlbGVtZW50cyB2aXNpYmlsaXR5XHJcbiAqXHJcbiAqIEBwYXJhbSBwYXltZW50TWV0aG9kXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVQcmljZVZpc2liaWxpdHkocGF5bWVudE1ldGhvZCkge1xyXG4gICAgaWYgKHBheW1lbnRNZXRob2QgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF5bWVudE1ldGhvZCA9ICQoJyNJQS1DLTQnKS52YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGb3JBbGxMb2FkKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmxvYWQtcHJpY2UnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLmNhci1wcmljZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmxvYWQtcHJpY2UnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLmNhci1wcmljZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRvZ2dsZXMgbG9hZCBjYXJzIHF1YW50aXRpZXMgdmlzaWJpbGl0eVxyXG4gKlxyXG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxudW1iZXJ9IHBheW1lbnRNZXRob2QgUGF5bWVudCBtZXRob2QgZm9yIGxvYWRcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZVF1YW50aXR5VmlzaWJpbGl0eShwYXltZW50TWV0aG9kKSB7XHJcbiAgICBpZiAocGF5bWVudE1ldGhvZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXltZW50TWV0aG9kID0gJCgnI0lBLUMtNCcpLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bGwoKSAmJiBpc0ZvckNhck1vZGVsKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmNhci1xdWFudGl0eScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmNhci1xdWFudGl0eScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBsb2FkIGNhcnMgcXVhbnRpdGllc1xyXG4gKlxyXG4gKiBUaGlzIGlzIGN1c3RvbSB2YWxpZGF0aW9uLCB0byBjaGVjayB3aGV0aGVyIHRvdGFsIG51bWJlciBvZiBsb2FkIGNhcnMgcXVhbnRpdGllcyBpcyBub3QgbGFyZ2VyIHRoYW4gbGltaXRcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUXVhbnRpdHkoKSB7XHJcbiAgICB2YXIgZm9ybUlkID0gJyNsb2FkLWVkaXRpbmctZm9ybSc7XHJcbiAgICBpZiAoJCgnI2xvYWQtZWRpdGluZy1mb3JtJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICBmb3JtSWQgPSAnI2xvYWQtYW5ub3VuY2VtZW50LWZvcm0nO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBxdWFudGl0aWVzID0gY291bnRDYXJRdWFudGl0aWVzKCk7XHJcbiAgICAkLmVhY2goJCgnLmNhci1xdWFudGl0eSBzZWxlY3QnKSwgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGlkID0gJ2xvYWRjYXItJyArIGluZGV4ICsgJy1xdWFudGl0eSc7XHJcbiAgICAgICAgaWYgKHF1YW50aXRpZXMgPiBRVUFOVElUWV9NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgJChmb3JtSWQpLnlpaUFjdGl2ZUZvcm0oJ3VwZGF0ZUF0dHJpYnV0ZScsIGlkLCBbVE9UQUxfUVVBTlRJVFlfVE9PX0JJR10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybUlkKS55aWlBY3RpdmVGb3JtKCd1cGRhdGVBdHRyaWJ1dGUnLCBpZCwgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnRzIGxvYWQgY2FycyBxdWFudGl0aWVzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBjb3VudENhclF1YW50aXRpZXMoKSB7XHJcbiAgICB2YXIgcXVhbnRpdGllcyA9IDA7XHJcbiAgICAkLmVhY2goJCgnLmNhci1xdWFudGl0eSBzZWxlY3QnKSwgZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgcXVhbnRpdGllcyA9ICBOdW1iZXIocXVhbnRpdGllcykgKyBOdW1iZXIoJChlbGVtZW50KS52YWwoKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBxdWFudGl0aWVzO1xyXG59XHJcblxyXG4vKipcclxuICogVG9nZ2xlcyBjdXJyZW50bHkgZWRpdGFibGUgbG9hZCBlbGVtZW50cyBzdHJ1Y3R1cmVcclxuICpcclxuICogQHBhcmFtIHt1bmRlZmluZWR8bnVtYmVyfSBwYXltZW50TWV0aG9kIFBheW1lbnQgbWV0aG9kIGZvciBsb2FkXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVFZGl0YWJsZUxvYWRFbGVtZW50c1N0cnVjdHVyZShwYXltZW50TWV0aG9kKSB7XHJcbiAgICBpZiAocGF5bWVudE1ldGhvZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXltZW50TWV0aG9kID0gJCgnI0lBLUMtNCcpLnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0ZvckFsbExvYWQocGF5bWVudE1ldGhvZCkpIHtcclxuICAgICAgICAkKCcubG9hZC1wYXltZW50LW1ldGhvZC1zZWxlY3Rpb24nKS5yZW1vdmVDbGFzcygnY29sLXhzLTEyJykuYWRkQ2xhc3MoJ2NvbC1zbS02Jyk7XHJcbiAgICAgICAgJCgnLmxvYWQtcHJpY2UnKS5hZGRDbGFzcygnY29sLXNtLTYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2FyIG1vZGVsIGl0ZW1zIHN0cnVjdHVyZVxyXG4gICAgICAgIGlmIChpc1Zpc2libGVSZW1vdmVDYXJCdXR0b24oKSkge1xyXG4gICAgICAgICAgICAkKCcuY2FyLXF1YW50aXR5JykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0yIGNvbC1tZC01IGNvbC1zbS01IGNvbC1tZC0zIGNvbC1zbS0zIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS00IGhpZGRlbicpLmFkZENsYXNzKCdjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMycpO1xyXG4gICAgICAgICAgICAkKCcuY2FyLW1vZGVsLCAuY2FyLXN0YXRlJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02JykuYWRkQ2xhc3MoJ2NvbC1zbS00Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmNhci1xdWFudGl0eScpLnJlbW92ZUNsYXNzKCdjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMyBjb2wtbWQtNiBjb2wtc20tNiBoaWRkZW4nKS5hZGRDbGFzcygnY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTQnKTtcclxuICAgICAgICAgICAgJCgnLmNhci1tb2RlbCwgLmNhci1zdGF0ZScpLnJlbW92ZUNsYXNzKCdjb2wtbGctMyBjb2wtc20tNicpLmFkZENsYXNzKCdjb2wtc20tNCcpO1xyXG4gICAgICAgICAgICAkKCcuY2FyLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcubG9hZC1wYXltZW50LW1ldGhvZC1zZWxlY3Rpb24nKS5hZGRDbGFzcygnY29sLXhzLTEyJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS02Jyk7XHJcbiAgICAgICAgJCgnLmxvYWQtcHJpY2UnKS5yZW1vdmVDbGFzcygnY29sLXNtLTYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2FyIG1vZGVsIGl0ZW1zIHN0cnVjdHVyZVxyXG4gICAgICAgIGlmIChpc0Z1bGwoKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlUmVtb3ZlQ2FyQnV0dG9uKCkpIHtcclxuICAgICAgICAgICAgICAgICQoJy5jYXItcHJpY2UnKS5yZW1vdmVDbGFzcygnY29sLXNtLTQgaGlkZGVuJykuYWRkQ2xhc3MoJ2NvbC1zbS0zJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXF1YW50aXR5JykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLW1vZGVsLCAuY2FyLXN0YXRlJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00JykuYWRkQ2xhc3MoJ2NvbC1zbS00Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0zIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS00IGhpZGRlbicpLmFkZENsYXNzKCdjb2wtc20tNCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzVmlzaWJsZVJlbW92ZUNhckJ1dHRvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXF1YW50aXR5JykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS00IGNvbC1tZC02IGNvbC1tZC0zIGNvbC1zbS0zIGNvbC1zbS02JykuYWRkQ2xhc3MoJ2NvbC1sZy0yIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLW1vZGVsLCAuY2FyLXN0YXRlJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00JykuYWRkQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00JykuYWRkQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS01Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXF1YW50aXR5JykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0yIGNvbC1tZC02IGNvbC1zbS02IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS00JykuYWRkQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLW1vZGVsLCAuY2FyLXN0YXRlJykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS00JykuYWRkQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2FyLXByaWNlJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy00IGNvbC1tZC01IGNvbC1zbS01IGNvbC1tZC00IGNvbC1zbS00IGhpZGRlbicpLmFkZENsYXNzKCdjb2wtbGctMyBjb2wtc20tNicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hhbmdlcyBsb2FkIGFuZCBsb2FkIGNhcnMgZWxlbWVudHMgdmlzaWJpbGl0eSBvbiBwYXltZW50IG1ldGhvZCBjaGFuZ2VcclxuICpcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZUVsZW1lbnRzVmlzaWJpbGl0eShlbGVtZW50KSB7XHJcbiAgICB2YXIgcGF5bWVudE1ldGhvZCA9ICQoZWxlbWVudCkudmFsKCk7XHJcblxyXG4gICAgdG9nZ2xlUmVxdWlyZWRDbGFzcygpO1xyXG4gICAgdG9nZ2xlUHJpY2VWaXNpYmlsaXR5KHBheW1lbnRNZXRob2QpO1xyXG4gICAgdG9nZ2xlUXVhbnRpdHlWaXNpYmlsaXR5KHBheW1lbnRNZXRob2QpO1xyXG4gICAgdmFsaWRhdGVRdWFudGl0eSgpO1xyXG4gICAgdG9nZ2xlRWRpdGFibGVMb2FkRWxlbWVudHNTdHJ1Y3R1cmUocGF5bWVudE1ldGhvZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmludHMgaG93IG1hbnkgY2hhcmFjdGVycyBhcmUgbGVmdCB0byBlbnRlciBpbiBjYXIgbW9kZWwgaW5wdXRcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgVGhpcyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIHByaW50UmVtYWluaW5nQ2hhcmFjdGVycyhlbGVtZW50KSB7XHJcbiAgICB2YXIgY2hhcmFjdGVycyA9ICQoZWxlbWVudCkudmFsKCkubGVuZ3RoO1xyXG4gICAgdmFyIGxlZnRTeW1ib2xzID0gTU9ERUxfTUFYX0xFTkdUSCAtIGNoYXJhY3RlcnM7XHJcblxyXG4gICAgaWYgKGNoYXJhY3RlcnMgPD0gTU9ERUxfTUFYX0xFTkdUSCkge1xyXG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuZmluZCgnLmhlbHAtYmxvY2snKS50ZXh0KE1PREVMX0NIQVJBQ1RFUlNfTEVGVCArIGxlZnRTeW1ib2xzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGxvYWQgdHlwZSBpcyBwYXJ0aWFsXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb2FkVHlwZSBMb2FkIHR5cGVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1BhcnRpYWwobG9hZFR5cGUpIHtcclxuICAgIGlmIChsb2FkVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsb2FkVHlwZSA9IExPQURfVFlQRTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9hZFR5cGUgPT0gVFlQRV9QQVJUSUFMO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgbG9hZCB0eXBlIGlzIGZ1bGxcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGxvYWRUeXBlIExvYWQgdHlwZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRnVsbChsb2FkVHlwZSkge1xyXG4gICAgaWYgKGxvYWRUeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxvYWRUeXBlID0gTE9BRF9UWVBFO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvYWRUeXBlID09IFRZUEVfRlVMTDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGxvYWQgcGF5bWVudCBtZXRob2QgaXMgZm9yIGNhciBtb2RlbFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGF5bWVudE1ldGhvZCBMb2FkIHBheW1lbnQgbWV0aG9kXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGb3JDYXJNb2RlbChwYXltZW50TWV0aG9kKSB7XHJcbiAgICByZXR1cm4gcGF5bWVudE1ldGhvZCA9PSBGT1JfQ0FSX01PREVMO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgbG9hZCBwYXltZW50IG1ldGhvZCBpcyBmb3IgYWxsIGxvYWRcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHBheW1lbnRNZXRob2QgTG9hZCBwYXltZW50IG1ldGhvZFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRm9yQWxsTG9hZChwYXltZW50TWV0aG9kKSB7XHJcbiAgICByZXR1cm4gcGF5bWVudE1ldGhvZCA9PSBGT1JfQUxMX0xPQUQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciByZW1vdmUgY2FyIGJ1dHRvbiBpcyB2aXNpYmxlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHsqfGpRdWVyeX1cclxuICovXHJcbmZ1bmN0aW9uIGlzVmlzaWJsZVJlbW92ZUNhckJ1dHRvbigpIHtcclxuICAgIHJldHVybiAkKCcucmVtb3ZlLWxvYWQtY2FyLW1vZGVsJykuaXMoJzp2aXNpYmxlJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBsb2FkIHR5cGUgaXMgc2VsZWN0ZWRcclxuICpcclxuICogQHJldHVybnMgeyp8alF1ZXJ5fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNMb2FkVHlwZVNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuICQoJy5JQS1DLTIuSUEtQy0zJykuaXMoJzpjaGVja2VkJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYXZlcyBlZGl0ZWQgbG9hZCBpbmZvcm1hdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gZSBFdmVudCBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXJ9IGlkIFNwZWNpZmljIGxvYWQgSUQgdGhhdCBlZGl0ZWQgaW5mb3JtYXRpb24gbmVlZHMgdG8gYmUgc2F2ZWRcclxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgVGhpcyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGVkaXRMb2FkKGUsIGlkLCBlbGVtZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50cyBmb3JtIGZyb20gZG91YmxlIHN1Ym1pdFxyXG4gICAgdmFyICRmb3JtID0gJCgnI2xvYWQtZWRpdGluZy1mb3JtJyk7XHJcbiAgICB2YXIgZGF0YSA9ICRmb3JtLmRhdGEoXCJ5aWlBY3RpdmVGb3JtXCIpO1xyXG4gICAgJC5lYWNoKGRhdGEuYXR0cmlidXRlcywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAyO1xyXG4gICAgfSk7XHJcbiAgICAkZm9ybS55aWlBY3RpdmVGb3JtKFwidmFsaWRhdGVcIik7XHJcbiAgICBpZighJCgnI2xvYWQtZWRpdGluZy1mb3JtJykuZmluZCgnLmhhcy1lcnJvcicpLmxlbmd0aCkge1xyXG4gICAgICAgICQucGpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBhcHBlbmRVcmxQYXJhbXMoJChlbGVtZW50KS5hdHRyKCdhY3Rpb24nKSksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICQoZWxlbWVudCkuc2VyaWFsaXplKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnI215LWxvYWRzLXRhYmxlLXBqYXgnLFxyXG4gICAgICAgICAgICBwdXNoOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVwbGFjZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbFRvOiBmYWxzZVxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjZWRpdC1sb2FkLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgJC5wamF4LnJlbG9hZCh7Y29udGFpbmVyOiAnI3RvYXN0ci1wamF4J30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVG9nZ2xlcyBuZXcgbG9hZCBmb3JtIGVsZW1lbnRzIHN0cnVjdHVyZVxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlTmV3TG9hZEVsZW1lbnRzU3RydWN0dXJlKCkge1xyXG4gICAgdmFyIGxvYWRUeXBlID0gJCgnLklBLUMtMi5JQS1DLTM6Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIHBheW1lbnRNZXRob2QgPSAkKCcjSUEtQy00JykudmFsKCk7XHJcblxyXG4gICAgcmVtb3ZlTmV3TG9hZEVsZW1lbnRzQ2xhc3NlcygpO1xyXG5cclxuICAgIC8vIExvYWRcclxuXHJcbiAgICBpZiAoaXNGb3JDYXJNb2RlbChwYXltZW50TWV0aG9kKSkge1xyXG4gICAgICAgICQoJy5sb2FkLXByaWNlLWNvbnRhaW5lcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAkKCcuZmllbGQtSUEtQy00JykucmVtb3ZlQ2xhc3MoJ2NvbC1zbS02Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRm9yQWxsTG9hZChwYXltZW50TWV0aG9kKSkge1xyXG4gICAgICAgICQoJy5maWVsZC1JQS1DLTQnKS5hZGRDbGFzcygnY29sLXNtLTYnKTtcclxuICAgICAgICAkKCcubG9hZC1wcmljZS1jb250YWluZXInKS5hZGRDbGFzcygnY29sLXNtLTYgY29sLXhzLTEyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBjYXJzXHJcblxyXG4gICAgaWYgKCFpc1Zpc2libGVSZW1vdmVDYXJCdXR0b24oKSAmJiAoIWlzTG9hZFR5cGVTZWxlY3RlZCgpIHx8IGlzUGFydGlhbChsb2FkVHlwZSkpICYmIGlzRm9yQ2FyTW9kZWwocGF5bWVudE1ldGhvZCkpIHtcclxuICAgICAgICAkKCcuZmllbGQtbG9hZGNhci1xdWFudGl0eSwgLmZpZWxkLWxvYWRjYXItbW9kZWwsIC5maWVsZC1sb2FkY2FyLXByaWNlLCAuZmllbGQtbG9hZGNhci1zdGF0ZScpLmFkZENsYXNzKCdjb2wtbGctMyBjb2wtc20tNicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNWaXNpYmxlUmVtb3ZlQ2FyQnV0dG9uKCkgJiYgaXNGb3JBbGxMb2FkKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcXVhbnRpdHksIC5maWVsZC1sb2FkY2FyLW1vZGVsLCAuZmllbGQtbG9hZGNhci1zdGF0ZScpLmFkZENsYXNzKCdjb2wtc20tNCcpO1xyXG4gICAgICAgICQoJy5maWVsZC1sb2FkY2FyLXByaWNlJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNWaXNpYmxlUmVtb3ZlQ2FyQnV0dG9uKCkgJiYgaXNGdWxsKGxvYWRUeXBlKSAmJiBpc0ZvckNhck1vZGVsKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcXVhbnRpdHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItbW9kZWwsIC5maWVsZC1sb2FkY2FyLXByaWNlLCAuZmllbGQtbG9hZGNhci1zdGF0ZScpLmFkZENsYXNzKCdjb2wtc20tNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Zpc2libGVSZW1vdmVDYXJCdXR0b24oKSAmJiAoIWlzTG9hZFR5cGVTZWxlY3RlZCgpIHx8IGlzUGFydGlhbChsb2FkVHlwZSkpICYmIGlzRm9yQ2FyTW9kZWwocGF5bWVudE1ldGhvZCkpIHtcclxuICAgICAgICAkKCcuZmllbGQtbG9hZGNhci1xdWFudGl0eSwgLmZpZWxkLWxvYWRjYXItbW9kZWwsIC5maWVsZC1sb2FkY2FyLXN0YXRlJykuYWRkQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02Jyk7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcHJpY2UnKS5hZGRDbGFzcygnY29sLWxnLTIgY29sLXNtLTUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWaXNpYmxlUmVtb3ZlQ2FyQnV0dG9uKCkgJiYgaXNGb3JBbGxMb2FkKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcXVhbnRpdHknKS5hZGRDbGFzcygnY29sLXNtLTMnKTtcclxuICAgICAgICAkKCcuZmllbGQtbG9hZGNhci1tb2RlbCwgLmZpZWxkLWxvYWRjYXItc3RhdGUnKS5hZGRDbGFzcygnY29sLXNtLTQnKTtcclxuICAgICAgICAkKCcuZmllbGQtbG9hZGNhci1wcmljZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWaXNpYmxlUmVtb3ZlQ2FyQnV0dG9uKCkgJiYgaXNGdWxsKGxvYWRUeXBlKSAmJiBpc0ZvckNhck1vZGVsKHBheW1lbnRNZXRob2QpKSB7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcXVhbnRpdHknKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItbW9kZWwsIC5maWVsZC1sb2FkY2FyLXN0YXRlJykuYWRkQ2xhc3MoJ2NvbC1zbS00Jyk7XHJcbiAgICAgICAgJCgnLmZpZWxkLWxvYWRjYXItcHJpY2UnKS5hZGRDbGFzcygnY29sLXNtLTMnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgbmV3IGxvYWQgZWxlbWVudHMgY2xhc3Nlc1xyXG4gKi9cclxuZnVuY3Rpb24gcmVtb3ZlTmV3TG9hZEVsZW1lbnRzQ2xhc3NlcygpIHtcclxuICAgICQoJy5sb2FkLXVubG9hZC1jaXR5LWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjb2wtc20tNCBjb2wtbGctMyBjb2wtc20tNicpO1xyXG4gICAgJCgnLmxvYWQtZGF0ZS1jb250YWluZXInKS5yZW1vdmVDbGFzcygnY29sLXNtLTQgY29sLWxnLTMgY29sLXNtLTYnKTtcclxuICAgICQoJy5sb2FkLXByaWNlLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4gY29sLWxnLTMgY29sLXNtLTYnKTtcclxuXHJcbiAgICAkKCcuZmllbGQtbG9hZGNhci1xdWFudGl0eScpLnJlbW92ZUNsYXNzKCdjb2wtbGctMiBjb2wtbGctMyBjb2wtc20tNiBjb2wtc20tNCBoaWRkZW4gY29sLXNtLTMnKTtcclxuICAgICQoJy5maWVsZC1sb2FkY2FyLW1vZGVsJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02IGNvbC1zbS00IGNvbC1zbS0zJyk7XHJcbiAgICAkKCcuZmllbGQtbG9hZGNhci1wcmljZScpLnJlbW92ZUNsYXNzKCdjb2wtbGctMyBjb2wtc20tNiBoaWRkZW4gY29sLXNtLTQgY29sLWxnLTIgY29sLXNtLTUgY29sLXNtLTMnKTtcclxuICAgICQoJy5maWVsZC1sb2FkY2FyLXN0YXRlJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0zIGNvbC1zbS02IGNvbC1zbS00Jyk7XHJcbn0iXX0=
