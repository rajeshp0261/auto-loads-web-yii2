<?php

use borales\extensions\phoneInput\PhoneInput;
use common\models\Load;
use common\models\LoadCity;
use dosamigos\datepicker\DatePicker;
use kartik\icons\Icon;
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\web\View;
use yii\web\JqueryAsset;
use frontend\controllers\SubscriptionController;

/** @var View $this */
/** @var array $cities */
/** @var Load $load */
/** @var LoadCity $loadCity */
/** @var ActiveForm $form */
/** @var integer $serviceCredits */
/** @var integer $subscriptionCredits */
/** @var string $subscriptionEndTime */
/** @var array $advertDayList */
/** @var array $openContactsDayList */
/** @var array $openContactsCost */
?>

<?php $form = ActiveForm::begin([
    'id' => 'load-announce-form',
    'validationUrl' => ['load/announce-validation'],
    'enableAjaxValidation' => true,
]); ?>
    <div class="row">
        <div class="clearfix wizard-h-wrapper">
            <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                <div class="wizard-element-circle-h">
                    <img src="<?php echo Yii::getAlias('@web') . '/images/car.png'; ?>"
                         class="wizard-element-image"
                         alt="<?php echo Yii::t('text', 'ALT_TAG_CAR'); ?>" />
                </div>
            </div>

            <div class="col-lg-11 col-xs-12">
                <div class="wizard-card">
                    <div class="load-type-selection-container">
                        <div class="select-any-load-type">
                            <?php echo Yii::t('element', 'IA-C-1a'); ?>
                        </div>

                        <?php echo $form->field($load, 'type')->radioList(Load::getTranslatedTypes(), [
                            'class' => 'load-type-selection clearfix',
                            'itemOptions' => [
                                'class' => 'IA-C-2 IA-C-3',
                            ],
                            'encode' => false
                        ])->label(false); ?>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="clearfix wizard-h-wrapper">
            <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                <div class="wizard-element-circle-h">
                    <img src="<?php echo Yii::getAlias('@web') . '/images/card.png'; ?>"
                         class="wizard-element-image"
                         alt="<?php echo Yii::t('text', 'ALT_TAG_CARD'); ?>" />
                </div>
            </div>
            
            <div class="col-lg-11 col-xs-12">
                <div class="wizard-card wizard-card--lower-addon payment">
                    <div class="row">
                        <?php echo $form->field($load, 'payment_method', [
                            'options' => [
                                'class' => 'col-xs-12',
                            ],
                            'inputOptions' => [
                                'id' => 'IA-C-4',
                            ],
                        ])->dropDownList(Load::getTranslatedPaymentMethods())->label(Yii::t('element', 'IA-C-4')); ?>
                        <span class="select-addon"><i class="fa fa-caret-down"></i></span>

                        <?php echo $form->field($load, 'price', [
                            'options' => [
                                'class' => 'load-price hidden',
                            ],
                            'inputOptions' => [
                                'class' => 'form-control IA-C-12',
                            ],
                            'template' =>
                                "{label}\n" .
                                "<div class=\"input-group\">" .
                                    "{input}\n" .
                                    "<span class=\"input-group-addon IA-C-13\">" .
                                        Yii::t('element', 'IA-C-13') .
                                    "</span>" .
                                "</div>" .
                                "{hint}\n" .
                                "{error}",
                        ])->label(Yii::t('element', 'IA-C-12')); ?>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="load-location-container">
            <div class="clearfix wizard-h-wrapper">
                <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                    <div class="wizard-element-circle-h">
                        <img src="<?php echo Yii::getAlias('@web') . '/images/location.png'; ?>"
                             class="wizard-element-image"
                             alt="<?php echo Yii::t('text', 'ALT_TAG_LOCATION'); ?>" />
                    </div>
                </div>

                <div class="col-lg-11 col-xs-12">
                    <div class="wizard-card">
                        <div class="row load-location-row">
                            <div class="load-unload-city-container col-sm-4 col-xs-12">
                                <?php echo Yii::$app->controller->renderPartial('__load-city', [
                                    'form' => $form,
                                    'id' => 'IK-C-10',
                                    'loadCity' => $loadCity,
                                    'attribute' => 'loadCityId',
                                    'label' => Html::tag('div', Yii::t('element', 'IA-C-5'), ['class' => 'city-label']) .
                                    Html::tag('span', Yii::t('element', 'IA-C-5a'), ['class' => 'select-few-cities']),
                                    'placeholder' => null,
                                    'multiple' => true,
                                    'cities' => $cities,
                                    'url' => Url::to([
                                        'site/city-list',
                                        'lang' => Yii::$app->language,
                                        'load' => true,
                                    ]),
                                ]); ?>
                            </div>

                            <div class="load-unload-city-container col-sm-4 col-xs-12">
                                <?php echo Yii::$app->controller->renderPartial('__load-city', [
                                    'form' => $form,
                                    'id' => 'IK-C-11',
                                    'loadCity' => $loadCity,
                                    'attribute' => 'unloadCityId',
                                    'label' => Html::tag('div', Yii::t('element', 'IA-C-6'), ['class' => 'city-label']) .
                                    Html::tag('span', Yii::t('element', 'IA-C-6a'), ['class' => 'select-few-cities']),
                                    'placeholder' => null,
                                    'multiple' => true,
                                    'cities' => $cities,
                                    'url' => Url::to([
                                        'site/city-list',
                                        'lang' => Yii::$app->language,
                                        'unload' => true,
                                    ]),
                                ]); ?>
                            </div>

                            <?php echo $form->field($load, 'date', [
                                'options' => [
                                    'class' => 'field-load-date col-sm-4 col-xs-12',
                                ],
                            ])->widget(DatePicker::className(), [
                                'options' => [
                                    'id' => 'IA-C-8',
                                    'class' => 'form-control',
                                ],
                                'language' => Yii::$app->language,
                                'clientOptions' => [
                                    'startDate' => date('Y-m-d'),
                                    'autoclose' => true,
                                    'format' => 'yyyy-mm-dd',
                                ],
                            ])->label(Yii::t('element', 'IA-C-7')); ?>
                        </div>
                        <div class="row load-location-row">
                        <div class="load-unload-city-container col-sm-4 col-xs-12">
                            <?php echo $form->field($loadCity, 'load_postal_code', [
                                'inputOptions' => [
                                    'class' => 'form-control IA-C-12',
                                    'maxlength' => LoadCity::POSTAL_CODE_MAX_LENGTH,
                                ],
                                ])->label(Yii::t('app', 'LOAD_POSTAL_CODE_LABEL'));
                            ?>
                        </div>
                        <div class="load-unload-city-container col-sm-4 col-xs-12">
                            <?php echo $form->field($loadCity, 'unload_postal_code', [
                                'inputOptions' => [
                                    'class' => 'form-control IA-C-12',
                                    'maxlength' => LoadCity::POSTAL_CODE_MAX_LENGTH,
                                ],
                                ])->label(Yii::t('app', 'UNLOAD_POSTAL_CODE_LABEL'));
                            ?>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="clearfix wizard-h-wrapper">
                <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                    <div class="wizard-element-circle-h">
                        <img src="<?php echo Yii::getAlias('@web') . '/images/info.png'; ?>"
                             class="wizard-element-image"
                             alt="<?php echo Yii::t('text', 'ALT_TAG_INFO'); ?>" />
                    </div>
                </div>

                <div class="col-lg-11 col-xs-12">
                    <div class="wizard-card">
                        <?php echo Yii::$app->controller->renderPartial('__load-info', [
                            'form' => $form,
                            'load' => $load,
                            'loadCars' => $load->checkLoadCarsExistence(),
                            'widgetContainer' => 'load_car_model_wrapper',
                            'widgetBody' => 'load-car-model-container',
                            'widgetItem' => 'load-car-model-item',
                        ]); ?>
                    </div>
                </div>
            </div>

            <?php if (Yii::$app->user->isGuest) : ?>
                <div class="clearfix wizard-h-wrapper">
                    <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                        <div class="wizard-element-circle-h">
                            <img src="<?php echo Yii::getAlias('@web') . '/images/person.png'; ?>"
                                 class="wizard-element-image"
                                 alt="<?php echo Yii::t('text', 'ALT_TAG_PERSON'); ?>" />
                        </div>
                    </div>
                    
                    <div class="col-lg-11 col-xs-12">
                        <div class="wizard-card">
                            <div class="row">
                                <?php echo $form->field($load, 'phone', [
                                    'options' => [
                                        'class' => 'form-group field-IA-C-42 required col-sm-6 col-xs-12',
                                    ],
                                ])->widget(PhoneInput::className(), [
                                    'defaultOptions' => [
                                        'id' => 'IA-C-42',
                                        'class' => 'form-control phone-number-input',
                                    ],
                                    'jsOptions' => [
                                        // NOTE: there is no such country as 'en' therefore it is changed to 'gb'
                                        'initialCountry' => Yii::$app->language == 'en' ? 'gb' : Yii::$app->language,
                                        'nationalMode' => false, // Changes Lithuanian placeholder from (8-612) 34567 to +370 612 34567
                                    ],
                                ])->label(Yii::t('element', 'IA-C-42')); ?>

                                <?php echo $form->field($load, 'email', [
                                    'enableAjaxValidation' => true,
                                    'options' => [
                                        'class' => 'required col-sm-6 col-xs-12',
                                    ],
                                    'inputOptions' => [
                                        'id' => 'IA-C-41',
                                    ],
                                ])->label(Yii::t('element', 'IA-C-41')); ?>
                            </div>
                        </div>
                    </div>
                </div>

            <?php else: ?>
            <div class="clearfix wizard-h-wrapper">
                <div class="col-lg-1 visible-lg wizard-icon-no-padding">
                    <div class="wizard-element-circle-h">
                        <i class="fa fa-bullhorn"></i>
                    </div>
                </div>

                <div class="col-lg-11 col-xs-12">
                    <div class="wizard-card adv-card">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <h4 class="wizard-card-title">
                                    <?php echo Yii::t('element', 'load_advertisement')?>
                                </h4>
                            </div>
                        </div>   
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="row">
                                <h4 class="wizard-card-title">
                                    <?php echo Yii::t('element', 'load_open_contacts')?>
                                </h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="alert alert-warning adv-alert" style="display: none;">
                                    <?php echo Yii::t('element', 'not_enough_total_credits', [
                                        'creditTopupLink' => Html::a(
                                            Yii::t('element', 'adv_credits_topup'),
                                            Url::to(['subscription/', 
                                                'tab' => SubscriptionController::TAB_CREDIT_TOP_UP_ORDER]
                                            ), [
                                                'target' => '_blank',
                                                'data-pjax' => 0,
                                                'class' => 'credit-topup-link',
                                            ]
                                        ),
                                        'subscriptionEndTime' => $subscriptionEndTime,
                                        'subscriptionCredits' => $subscriptionCredits,
                                    ]); ?>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm12">
                                        <div class="material-icons adv-icon" >directions_car</div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-10 field-position-number">
                                        <?php echo $form->field($load, 'car_pos_adv', [
                                                'enableClientValidation' => false,
                                                'enableAjaxValidation' => false,
                                            ])->dropDownList([
                                                0 => Yii::t('element', 'select_car_pos_num'),
                                                1,2,3,4,5,6,7,8,9,10
                                            ], [
                                                'disabled' => $serviceCredits + $subscriptionCredits === 0 ? 
                                                    'disabled' : false, 'id' => 'car-count'
                                            ])->label(Yii::t('element', 'car_pos_adv_number'));
                                        ?>
                                        <span class="select-addon"><i class="fa fa-caret-down"></i></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <div class="material-icons adv-icon">today</div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-10 field-position-number">
                                        <?php echo $form->field($load, 'days_adv', [
                                                'enableClientValidation' => false,
                                                'enableAjaxValidation' => false,
                                            ])->dropDownList($advertDayList, [
                                                'disabled' => $serviceCredits + $subscriptionCredits === 0 ? 
                                                    'disabled' : false, 'id' => 'car-days']
                                            )->label(Yii::t('element', 'adv_day_number')); ?>
                                        <span class="select-addon"><i class="fa fa-caret-down"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div class="row">
                                    <div class="col-lg-11 col-md-11 col-sm-12">
                                        <div class="form-group field-car-count">
                                            <?php echo Html::label(Yii::t('element', 'car_pos_adv_number'), 
                                                '', [
                                                    'class' => 'control-label'
                                                ]);
                                            
                                            echo Html::tag('div', Yii::t('element', 
                                                'adv_open_contacts_service_cost', 
                                                ['credits' => $openContactsCost]
                                            ), [
                                                'id' => 'open-contacts-cost',
                                                'data-open-contacts-cost' => $openContactsCost,
                                                'class' => 'form-control adv-open-contacts-cost'
                                            ]); ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 col-md-11 col-sm-12 field-position-number">
                                        <?php echo $form->field($load, 'open_contacts_days', [
                                                'enableClientValidation' => false,
                                                'enableAjaxValidation' => false,
                                            ])->dropDownList($openContactsDayList, [
                                                'class' => 'form-control IA-C-14 field-service-service_type_id',
                                                'id' => 'open_contacts_days',
                                                'disabled' => $serviceCredits + $subscriptionCredits === 0 ? 'disabled' : false, 
                                            ]); ?>
                                        <span class="select-addon"><i class="fa fa-caret-down"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-offset-6 col-xs-6 stats-wrap">
                                <input type="text" class="total-credits" name="total-service-credits" hidden 
                                    data-credits="<?php echo $serviceCredits; ?>"
                                    data-subscription-credits="<?php echo $subscriptionCredits; ?>"/>
                                <span class="adv-credits-cost pull-right"><?php echo Yii::t('element', 'adv_credits_cost');?>
                                    <span class="cred-val">0</span>
                                </span>
                                <span class="adv-total-credits pull-right"><?php echo Yii::t('element', 'adv_total_credits {0}', [$serviceCredits]);?></span>
                                <span id="total-creds-topup-tr" class="adv-total-credits-topup pull-right">
                             <a target="_blank" href="<?php echo Url::to(['subscription/', 'tab' => SubscriptionController::TAB_CREDIT_TOP_UP_ORDER])?>">
                                <?php echo Yii::t('element', 'adv_credits_topup'); ?>
                             </a>
                        </span>
                            </div>
                        </div>
                    </div>
                </div>

            <?php endif; ?>

            <div class="text-center">
                <?php echo Html::submitButton(Icon::show('bullhorn', '', Icon::FA) . Yii::t('element', 'IA-C-15'), [
                    'id' => 'IA-C-15',
                    'class' => 'primary-button load-announce-button',
                    'name' => 'load-announce-button',
                ]); ?>
            </div>
        </div>
    </div>
<?php ActiveForm::end(); ?>

<div class="required-fields-explanation">
    <?php echo Yii::t('element', 'IA-C-1b'); ?>
</div>
<?php
$this->registerJsFile(Url::base() . '/dist/js/load/load-announce.js', ['depends' => [JqueryAsset::className()]]);
?>