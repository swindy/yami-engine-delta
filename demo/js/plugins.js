// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.04 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Open Console":"false","Reposition Battlers":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.10 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"true","Timed Buffs":"true","Turn Time":"100","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","---Selection Help---":"","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YED_SkillShop","status":true,"description":"v1.0.0 This plugin provides a skill shop for buying skills.","parameters":{"[Basic Setting]":"","Default Price":"100","[Visual Setting]":"","Gold Cost Text":"Gold Cost","Item Cost Text":"Item Costs","Buy Command":"Learn","Cancel Command":"Cancel","Text Alignment":"center"}},
{"name":"YED_Filters","status":false,"description":"","parameters":{}},
{"name":"YED_TransferStealStates","status":true,"description":"v1.0.1 Allows creating skills that can transfer and/or steal\nstates to/from target.","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"Adds more features to the Message Window to customized the\nway your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","---Font---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"YED_WordWrap","status":true,"description":"v1.0.0 This plugin provides word wrap feature, so that a long text will be properly broken down into lines.","parameters":{}},
{"name":"YED_InfectiveState","status":true,"description":"v1.0.0 Make a state can be infected to nearby battlers.","parameters":{}},
{"name":"YED_Tilemap","status":true,"description":"v1.1.0 Implementation for Tiled Map Editor.","parameters":{}},
{"name":"YED_SingleState","status":true,"description":"v1.0.0 This plugin restricts battlers to be affected by only one state.","parameters":{"Replace State":"true"}},
{"name":"YED_EnemyPosition","status":true,"description":"v1.0.0 This plugin moves enemy sprites to certain positions or by offsets in battle. Works well for bigger resolution.","parameters":{}}
];
