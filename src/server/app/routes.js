
var path = require('path')

module.exports = function(app, passport) {            
        // LOGIN =================================

        // process the login form
        app.post('/login', function(req,res ,next){                                    
            passport.authenticate('local-login', function(err, user , info){
            if(err)
               return res.json(err)
            
            if(user.error){
                return res.json({error : user.error })
            }

            req.login(user , function(err){
                if(err)
                    return res.json(err)
                
                return res.json({redirect : '/profile' , crntuser : user })
                })
              }                 
            )(req,res)
        });

        // SIGNUP =================================

        // process the signup form
        app.post('/signup', 
            function(req, res , next){
                passport.authenticate('local-signup', function(err , user, info){
            if(err)
               return res.json(err)
            
            if(user.error){
                return res.json({error : user.error })
            }

            req.login(user , function(err){
                if(err)
                    return res.json(err)
                
                return res.json({redirect : '/profile' , crntuser : user })
                    })
                })(req,res) ;
        })         

    // LOGOUT ==============================
    app.get('/logout',isLoggedIn, function(req, res) {
        req.logout();
        res.json({logout : 'You are logged out'})        
    });

     app.get('/isAuth', function(req , res){    
         console.log('Hi')     
        if(req.isAuthenticated()){
            console.log('hi 1')
            res.json({"authenticated" : true})         
        }
        else{
            console.log('hi 2')
            res.json({"authenticated": false})         
        }            
     })

    // DEFAULT ROUTES ==============================         

    app.get('/*', function(req,res){
        res.sendFile(path.join(__dirname,'./../../../dist/index.html'));
    })

  
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');   
}