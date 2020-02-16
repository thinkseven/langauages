using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace examples
{
    public class LogAction
    {
        public void TakeImpression(string eventName)
        {
            Console.WriteLine(eventName);
        }
    }

    public class ErrorHandler
    {
        public void HandlerError(string eventName)
        {
            Console.WriteLine(eventName + " error");
        }
    }

    public interface ILogin
    {
        void Authenticate(string userid, string password);
        void logout(string userid, string sessionid);
    }

    public class Login: ILogin
    {
        private event Action<string> LOGIN_SUCCESS;
        private event Action<string> LOGIN_FAILED;
        private event Action<string> LOGIN_UNAUTHORIZED;
        private event Action<string> LOGIN_CHANLLENGED;
        private event Action<string> LOGOUT;

        public void RegisterEvents(Action<string> action)
        {
            if (action != null)
            {
                LOGIN_SUCCESS += action;
                LOGIN_FAILED += action;
                LOGIN_UNAUTHORIZED += action;
                LOGIN_CHANLLENGED += action;
                LOGOUT += action;
            }
        }
        public void Authenticate(string userid, string password)
        {
            
            // login passed
            if (true)
            {
                // raise login complete event
                LOGIN_SUCCESS("LOGIN COMPLETE");
            }
        }

        public void logout(string userid, string sessionid)
        {
            
            // logout passed
            if (true)
            {
                // raise logout complete event
                LOGOUT("LOGOUT COMPLETE");
            }
        }
    }
}
