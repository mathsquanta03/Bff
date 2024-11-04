package com.example.bff.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.csrf.CookieServerCsrfTokenRepository;
import org.springframework.security.web.server.authentication.RedirectServerAuthenticationSuccessHandler;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        return http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieServerCsrfTokenRepository.withHttpOnlyFalse()))
            .oauth2Login(oauth2 -> oauth2
                .authenticationSuccessHandler(new RedirectServerAuthenticationSuccessHandler("http://localhost:3000")))
            .authorizeExchange(authorize -> authorize
                .pathMatchers("/api/csrf").permitAll()
                .pathMatchers("/oauth2/**").permitAll()
                .anyExchange().authenticated())
            .build();
    }
}