//package com.app.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
////@EnableWebSecurity//to enable spring sec frmwork support
////@Configuration //to tell SC , this is config class containing @Bean methods
//////@EnableGlobalMethodSecurity(prePostEnabled = true)
//////To enable method level authorization support : pre n post authorization
////@EnableMethodSecurity(prePostEnabled = true)
//
//
//@EnableWebSecurity // to enable Spring Security framework support
//@Configuration // to indicate this is a configuration class containing @Bean methods
//@EnableMethodSecurity(prePostEnabled = true) // To enable method-level authorization support: pre and post authorization
//public class SecurityConfig {
//	//dep : pwd encoder
//	@Autowired
//	private PasswordEncoder enc;
//	//dep : custom jwt auth filter
//	@Autowired
//	private JwtAuthenticationFilter jwtFilter;
//	//dep : custom auth entry point
//	@Autowired
//	private CustomAuthenticationEntryPoint authEntry;
//	
//	
//	@SuppressWarnings("removal")
//	@Bean
//	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
//	{
//		// URL based authorization rules
//		http.cors().
//		and().
//		csrf().disable()
//		.exceptionHandling().authenticationEntryPoint(authEntry)
//		.and()
//		.authorizeHttpRequests()
//		.requestMatchers("/user/signin", "/user/signup", "/v*/api-doc*/**", "/swagger-ui/**").permitAll()
//		.requestMatchers(HttpMethod.OPTIONS).permitAll()
//		.anyRequest().authenticated()
//		.and()
//		.sessionManagement()
//		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//		.and()
//		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//        return http.build();
//	}
//	//configure AuthMgr as a spring bean
//	@Bean
//	public AuthenticationManager authenticationManager
//	(AuthenticationConfiguration config) throws Exception
//	{
//		return config.getAuthenticationManager();
//	}
//}
