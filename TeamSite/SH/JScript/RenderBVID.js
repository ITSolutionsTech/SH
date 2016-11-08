RegisterModuleInit("/ec/pc/_catalogs/masterpage/SH/JScript/RenderBVID.js", renderBaseViewID);

var renderBaseViewID = function(){


    //Take a copy of the existing Microsoft Definition of RenderListView
    var oldRenderListView = RenderListView;

    //Now redefine RenderListView with our override
    RenderListView = function (ctx, webPartID) {
        console.log(ctx.ListTitle+', ctx.listName == "'+ ctx.listName + '"');

        //Vérification du titre de chaque WebPart et assignation du BaseViewID pour prévenir le chevauchement des styles
 
        if (ctx.listName == "{12F68B89-EF6E-4514-98AA-F0BC20B0BADA}") {
            //Documents de formation
            ctx.BaseViewID = 100;
        } 
        else if (ctx.listName == "{DB3ED966-B92F-4CA3-8585-E937423BA4A6}") {
            //Structures
            ctx.BaseViewID = 99;
        }
        else if (ctx.listName == "{6A6F7EB3-4418-4356-9934-2D58BB153338}") {
            //Foire aux questions
            ctx.BaseViewID = 98;
        }
        else if (ctx.listName == "{0778F882-E537-479B-89BF-3A433E9B32B6}") {
            //Partage des expériences
            ctx.BaseViewID = 97;
        }
        else if (ctx.listName == "{3CA46EC1-8E9A-4E95-83FC-D28DC3FF095C}") {
            //Partage des solutions
            ctx.BaseViewID = 96;
        }
        else if (ctx.listName == "{21BFA570-4C50-480F-933A-F899533EF74F}") {
            //Discussion sur les problèmes
            if(ctx.view == "{E7AA2053-3F9A-43E1-8CD2-030972514247}")
            ctx.BaseViewID = 95;
        }

        //now call the original RenderListView with the updated ctx object if applicable
        oldRenderListView(ctx, webPartID);
    }

}

renderBaseViewID();


