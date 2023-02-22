using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using server.src.Models.entity;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace server.src.shared.security.token
{
    public class Response
    {
        public string accessToken { get; set; }
        public DateTime expiresin { get; set; }

    }
    public class Token
    {
        public static Response Generate(User user)
        {
            byte[] secret = Encoding.ASCII.GetBytes("my-secret-with-128bist.my-secret-with-128bist.my-secret-with-128bist.");
            var configJwt = new SecurityTokenDescriptor();
            DateTime expiresin = DateTime.UtcNow.AddMinutes(35);
            string userId = user.Id + "";

            Claim emailClaim = new Claim(ClaimTypes.Email, user.email);
            Claim nameClaim = new Claim("user_id", userId);

            configJwt.Subject = new ClaimsIdentity(new List<Claim> { emailClaim, nameClaim });
            configJwt.Expires = expiresin;
            configJwt.SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature);

            var jwt = new JwtSecurityTokenHandler();
            var token = jwt.CreateToken(configJwt);
            string tokenString = jwt.WriteToken(token);

            return new Response { accessToken = tokenString, expiresin = expiresin };
        }
    }
}