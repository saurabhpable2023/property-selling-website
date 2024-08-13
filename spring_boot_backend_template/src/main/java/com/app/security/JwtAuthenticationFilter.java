//package com.app.security;
//
//import java.io.IOException;
//import java.util.List;
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import io.jsonwebtoken.Claims;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component // spring bean : can be injected in other spring beans
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//	// token verification
//	// dep : JWT utils
//	@Autowired
//	private JwtUtils utils;
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, 
//			HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		// check auth header from incoming request
//		String authHeader = request.getHeader("Authorization");
//		if (authHeader != null && authHeader.startsWith("Bearer ")) {
//			// => req header contains JWT
//			String jwt = authHeader.substring(7);
//			// validate JWT
//			Claims payloadClaims = utils.validateJwtToken(jwt);
//			// get user name from the claims
//			String email = utils.getUserNameFromJwtToken(payloadClaims);
//			// get granted authorities as a custom claim
//			List<GrantedAuthority> authorities = utils.getAuthoritiesFromClaims(payloadClaims);
//			// add username/email n granted authorities in Authentication object
//			UsernamePasswordAuthenticationToken token = 
//					new UsernamePasswordAuthenticationToken(email, null,
//					authorities);
//			// save this auth token under spring sec so that subsequent filters will NOT
//			// retry the auth again
//			SecurityContextHolder.getContext().setAuthentication(token);
//			System.out.println("saved auth token in sec ctx");
//		}
//		filterChain.doFilter(request, response);// to continue with remaining chain of spring sec filters
//
//	}
//
//}
